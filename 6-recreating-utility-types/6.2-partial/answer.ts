// Exercise: Create utility type called `MyPartial` that makes all properties in T optional

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Test
type User = { id: number; name: string };
const partialUser: MyPartial<User> = {}; // Valid, since all properties are optional
