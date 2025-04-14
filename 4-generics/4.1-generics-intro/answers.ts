// Exercise: Understanding Functions with a Generic Argument

// Question 1:
// Write a generic function named `identity` that takes a single argument of type `T` and returns it.
// The function should work with any type.

function identity<T>(value: T): T {
  return value;
}

// Question 2:
// Call the `identity` with an explicit type argument of `string` and the value "Hi".
// What is the type of the returned value?

const hiIdentity = identity<string>("Hi");

// Question 3: Remove the explicit type argument. What is the type of the returned value now?

const hiIdentity2 = identity("Hi");

// The returned value's type is the string literal "Hi".

// Question 4:
// Why is it useful to use generics in the `identity` function instead of using `any`?

// Using generics ensures type safety by preserving the type of the input and output.
// This means that if you pass a number, the return type will also be a number, and TypeScript will enforce this.
// This avoids runtime errors and improves code maintainability.

// Question 5:
// Create a generic function called `wrapInArray` that takes a value of any type and returns it wrapped in an array.
// Ensure the return type is an array of the same type as the input.

function wrapInArray<T>(value: T): T[] {
  return [value];
}
