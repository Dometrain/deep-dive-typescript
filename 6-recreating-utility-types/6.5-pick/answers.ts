// Create a utility type called `MyPick`.
// It should accept two arguments:
// 1: `T`, the target type
// 2. `K`, a union of properties whose keys are in `T`
// It should return a type with only those properties from `T` whose keys are in `K`.

// 1. Accept a type `T` and a union of keys that are in the type, called `K`.
// 2. Iterate over each property in `K`.
// 3. For each property keep the existing type.
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Test
type User = { id: number; name: string };
const user: User = { id: 1, name: "Cory" };
const userWithOnlyId: MyPick<User, "id"> = { id: 1 };
