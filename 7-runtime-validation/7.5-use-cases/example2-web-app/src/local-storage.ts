// Validating localStorage values with Zod
import * as z from "zod";

const counterSchema = z.coerce.number().min(0).max(100);

export function setupCounter(element: HTMLButtonElement) {
  const result = counterSchema.safeParse(localStorage.getItem("count"));

  if (!result.success) {
    console.error("Invalid count in localStorage", result.error);
    localStorage.removeItem("count");
  }

  let counter = result.success ? result.data : 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => {
    const newCount = counter + 1;
    setCounter(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  });

  setCounter(counter);
}
