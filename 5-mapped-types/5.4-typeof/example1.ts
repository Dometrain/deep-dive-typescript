// JS has `typeof` for values.
// TypeScript has `typeof` for getting the type of a type, value, or function.

// Create a type from a value:
let message = "hello";
type MessageType = typeof message; // "string" or, "hello" if const is used above.
