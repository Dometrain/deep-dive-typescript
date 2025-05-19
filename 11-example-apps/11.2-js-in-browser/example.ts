// TS doesn't know what the query will resolve to, so use type assertion
const button = document.getElementById("change-text") as HTMLButtonElement;

// Or, use querySelector with a generic type parameter
const button1 = document.querySelector<HTMLButtonElement>("#change-text");

// or, for safety, narrow the type using a type guard;
const button2 = document.getElementById("change-text");
if (button2 instanceof HTMLButtonElement) {
  // Now TS knows button3 is an HTMLButtonElement
  button2.addEventListener("click", () => {
    const textElement = document.getElementById("text-container");
    if (textElement) {
      textElement.innerHTML = "Changed text";
    }
  });
} else {
  // Optionally, handle the error case
  console.error("Element is not a button");
}

// Or, if you query by DOM element name, TS infers the type, but may be null
const button3 = document.querySelector("button");

// Also get a precise type based on the element created
const input = document.createElement("input");

// TS knows p is an HTMLParagraphElement, so we can set relevant properties
input.value = "Test input";

// Use optional chaining to avoid errors if null
document.querySelector("body")?.appendChild(input);

// Or, can use a non-null assertion
document.querySelector("body")!.appendChild(input);

const appDiv = document.querySelector<HTMLDivElement>("#app")!;
appDiv.innerHTML = `<h1>Hello world</h1>`;
