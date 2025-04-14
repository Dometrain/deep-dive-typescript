// Exercise: Type Guards with `typeof`

// Question 1:
// Write a function `isNumber` that takes a parameter `value` of type `unknown` and returns `true` if the value is a number, otherwise returns `false`.
function isNumber(value: unknown): boolean {
  return typeof value === "number";
}

// Question 2:
// Write a function `processValue` that takes a parameter `value` of type `unknown` and returns a different result based on the type of the value.
// If the value is a number, return the value multiplied by 2.
// If the value is a string, return the string in uppercase.
// If the value is a boolean, return the negation of the value.
// For any other type, return null.

function processValue(value: unknown): number | string | boolean | null {
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return null;
  }
}
