// Exercise: Type Narrowing with Assertion Functions in TypeScript

// Question 1:
// Write an assertion function `assertIsNumber` that takes a parameter `value` of type `any` and throws an error if the value is not a number. Use this function to narrow the type of a variable.

// Test answer to 1:
// let anotherValue: any = 42;
// assertIsNumber(anotherValue);
// console.log(anotherValue.toFixed(2)); // This should work because `anotherValue` is now narrowed to `number`

// Question 2:
// Write an assertion function `assertIsArray` that takes a parameter `value` of type `any` and throws an error if the value is not an array. Use this function to narrow the type of a variable.

// Test answer to 2:
// let arrayValue: any = [1, 2, 3];
// assertIsArray(arrayValue);
// console.log(arrayValue.length); // This should work because `arrayValue` is now narrowed to `any[]`
