// JS has `typeof` for values.
console.log(typeof "Hi"); // Prints "string"

// TypeScript has `typeof` for getting the type of a value or function:
let message = "hello";
type MessageType = typeof message; // "string" or, "hello" if const is used above.
