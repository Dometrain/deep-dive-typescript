// Exercise: Type Assertions in TypeScript

// Question 1:
// Given the following variable, use a type assertion to treat it as a string
// and call the `toUpperCase` method.
let someValue: unknown = "Hello, TypeScript!";

// Question 2:
// You have a DOM element with the id "myElement". Use a type assertion to treat
// it as an HTMLDivElement and set its innerText to "Hello, World!".
let myElement = document.getElementById("myElement");

// Question 3:
// Given the following function, use a type assertion to return the response as
// a Promise that resolves to a number: Promise<number>.
async function getUserAge(userId: number) {
  const resp = await fetch("http://example.com/user/" + userId);
  return resp.json();
}
