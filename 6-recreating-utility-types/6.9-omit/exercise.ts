// Exercise: Create a utility type called `MyOmit` that accepts an object and creates a new type that omits specific properties from the provided object.
// Use two generic arguments:
// 1. `T` - The target object
// 2. `K` - A union of keys to omit from the new object
// Hint: Compose other built-in utility types to implement this.

// Test
// type User = { id: number; name: string; age: number };
// type UserWithoutAge = MyOmit<User, "age">;
