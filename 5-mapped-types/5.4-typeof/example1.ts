// JS already has a typeof operator for values.
// TypeScript has a `typeof` operator for types.
// It creates types from other types, values, or functions.

// Create a type from a value:
let message = "hello";
type messageType = typeof message;
// ^ type messageType = "string" // or, would be literal type "hello" if const is used above.
