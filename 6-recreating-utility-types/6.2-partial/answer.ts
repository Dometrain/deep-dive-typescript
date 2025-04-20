// Exercise: Create utility type called `MyPartial` that makes all properties in T optional

// 1. Iterate over each property in T
// 2. Make each property optional.
// 3. Keep the type of the property the same.
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Test
type User = { id: number; name: string };
const partialUser: MyPartial<User> = {}; // Valid, since all properties are optional
