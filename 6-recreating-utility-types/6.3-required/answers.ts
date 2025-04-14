// Exercise: Create a utility type called `MyRequired` that makes all properties in T required.
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Test cases
type User = { id?: number; name?: string };

//@ts-expect-error
const user: MyRequired<User> = {};
