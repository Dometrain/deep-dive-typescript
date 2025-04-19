// TS doesn't know what the query will resolve to, so must use type assertion
// to tell it that the element will be an HTMLButtonElement
const button = document.getElementById("change-text") as HTMLButtonElement;

// Or, can use generic type parameter to specify the type
const button1 = document.querySelector<HTMLButtonElement>("#change-text");

// Or, if we query by DOM element name, then TypeScript infers the type
const button2 = document.querySelector("button");

button.addEventListener("click", () => {
  const textElement = document.getElementById("text-container");
  if (textElement) {
    textElement.innerHTML = "Changed text";
  }
});

// Also get a precise type based on the element created
const input = document.createElement("input");

// TS knows p is an HTMLParagraphElement, so we can set relevant properties
input.value = "Test input";

// Use optional chaining to avoid errors if null
document.querySelector("body")?.appendChild(input);

// Or, can use ! to assert that the element is not null
document.querySelector("body")!.appendChild(input);

const appDiv = document.querySelector<HTMLDivElement>("#app")!;
appDiv.innerHTML = `<h1>Hello world</h1>`;
