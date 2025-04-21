// Exercise: Create a utility type called `MyOmit` that accepts an object
// and creates a new type that omits specific properties from the provided object.
// Use two generic arguments:
// 1. `T` - The target object
// 2. `K` - A union of keys to omit from the new object
// Hint: Compose other built-in utility types to implement this.

// 1. Accept a target type called `T`, and a union of keys in the type, called `K`.
// 2. Use `Pick` to create a new type with only the properties in `T`
// whose keys are not in `K`.
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Test
type User = { id: number; name: string; age: number };
type UserWithoutAge = MyOmit<User, "age">;
