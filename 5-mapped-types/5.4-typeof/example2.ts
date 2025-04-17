// Get object's type via `typeof`
// Creates a type that matches an object's structure.
const user = { name: "Alice", age: 15 };
type User = typeof user;
