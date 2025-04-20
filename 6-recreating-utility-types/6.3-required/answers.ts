// Exercise: Create a utility type called `MyRequired` that makes all properties in T required.

// 1. Iterate over each property in T
// 2. Require the property (by removing the optional, if one exists).
// 3. Keep the type of the property the same.
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Test cases
type User = { id?: number; name?: string };

//@ts-expect-error
const user: MyRequired<User> = {};
