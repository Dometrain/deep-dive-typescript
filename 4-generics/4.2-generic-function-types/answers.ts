// Exercise: Understanding Generic Function Types in TypeScript

// Question 1:
// Define a generic function type called `Transformer` that represents a function taking a value of type T
// and returning a value of type U. Then, create a function `stringToNumber` that implements this type
// by converting a string to a number.

type Transformer<T, U> = (input: T) => U;

const stringToNumber: Transformer<string, number> = (input) =>
  parseFloat(input);

const result = stringToNumber("123.45");

const numberToString: Transformer<number, string> = (input) => input.toString();
const result2 = numberToString(123.45);
