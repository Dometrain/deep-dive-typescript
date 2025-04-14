// Exercise: Type Narrowing with Type Predicates in TypeScript

// Question 1:
// Define a type predicate function `isNumber` that takes a parameter of type `unknown` and returns `true` if the parameter is a number, and `false` otherwise.

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// Question 2:
// Use the `isNumber` type predicate function to narrow the type of the variable typed to `unknown` below and log `value` + 1.

const value: unknown = 42;

if (isNumber(value)) {
  console.log(value + 1);
}

// Question 3:
// Define a type predicate function `isArray` that takes a parameter of type `unknown` and returns `true` if the parameter is an array, and `false` otherwise.

function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

// Question 4:
// Use the `isArray` type predicate function to narrow the type of `arrayExample` below then log the first array element.

const arrayExample: unknown = [1, 2, 3];

if (isArray(arrayExample)) {
  console.log(arrayExample[0]); // Should print 1
}
