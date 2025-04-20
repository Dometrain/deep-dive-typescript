// Exercise: Create a utility type called `MyReadonly` that makes all properties in T readonly

// 1. Iterate over each property in T
// 2. Make each property readonly.
// 3. Keep the type of the property the same.
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Test
type User = { id: number; name: string };
const readonlyUser: MyReadonly<User> = { id: 1, name: "Cory" };
//@ts-expect-error
readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
