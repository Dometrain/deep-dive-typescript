// Exercise: Create a utility type called `MyReadonly` that makes all properties in T readonly

// Test
// type User = { id: number; name: string };
// const readonlyUser: MyReadonly<User> = { id: 1, name: "Cory" };
// //@ts-expect-error
// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
