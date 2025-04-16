// Exercise: Testing knowledge of the `keyof` type operator in TypeScript

// Question 1:
// Given the following interface, use the `keyof` operator to create a type that represents the keys of the `Book` interface.
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

// Question 2:
// Create a function `getProperty` that takes an object of type `Book` and a key of type `BookKeys`,
// and returns the value of the specified key.

// Example usage:
// const book: Book = {
//   title: "Code Complete",
//   author: "Steve McConnell",
//   publishedYear: 1993,
// };

// const name = getProperty(book, "title"); // "Steve McConnell"

// Exercise 3: Extracting types from an interface
// Question: Given the following interface, use keyof and the Extract utility type
// to create a union type called `StringProperties` that only includes name and email.

interface Person {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
