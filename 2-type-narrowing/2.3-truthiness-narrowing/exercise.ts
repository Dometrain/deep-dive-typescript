// Exercise: Truthiness Narrowing in TypeScript

// Question 1:
// Write a function `printIfTruthy` that takes a single argument `value` of type `unknown`.
// The function should print "Truthy" if the value is truthy, and "Falsy" if the value is falsy.

// Test cases for Question 1:
// printIfTruthy(true); // Truthy
// printIfTruthy(false); // Falsy
// printIfTruthy(1); // Truthy
// printIfTruthy(0); // Falsy
// printIfTruthy("hello"); // Truthy
// printIfTruthy(""); // Falsy
// printIfTruthy(null); // Falsy
// printIfTruthy(undefined); // Falsy

// Question 2:
// Write a function `isNonEmptyArray` that takes a single argument `value` of type `unknown`.
// The function should return true if the value is an array with at least one element, and false otherwise.

// Test cases for Question 2:
// console.log(isNonEmptyArray([1, 2, 3])); // true
// console.log(isNonEmptyArray([])); // false
// console.log(isNonEmptyArray("not an array")); // false
// console.log(isNonEmptyArray(null)); // false
// console.log(isNonEmptyArray(undefined)); // false
