// Create a utility type called `MyPick`.
// It should accept two arguments:
// 1: `T`, the target type
// 2. `K`, a union of properties whose keys are in `T`
// It should return a type with only those properties from `T` whose keys are in `K`.

// Test
// type User = { id: number; name: string };
// const user: User = { id: 1, name: "Cory" };
// const userWithOnlyId: MyPick<User, "id"> = { id: 1 };
