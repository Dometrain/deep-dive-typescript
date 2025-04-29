// Exercise: Mapped Types with the `in` Keyword

// Question 1:
// Create a mapped type `NullableProperties<T>` that makes all properties of a given type `T` nullable.

type NullableProperties<T> = {
  [K in keyof T]: T[K] | null;
};

// Test
type User1 = { id: number; name: string };
type NullableUser = NullableProperties<User1>;
const user1: NullableUser = { id: null, name: "John" }; // valid

// Question 2:
// Create a mapped type `PickProperties<T, K>` that picks only the properties of `T` whose keys are in `K`.

type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Test:
type User4 = { id: number; name: string; age: number };
type PickedUser = PickProperties<User4, "id" | "name">; // Note auto-completion for "id" and "name"
const user4: PickedUser = { id: 1, name: "John" }; // valid

// Question 3:
// Create a mapped type `ReadonlyProperties<T>` that makes all properties of a given type `T` readonly.
// Example:
// type User = { id: number; name: string; };
// type ReadonlyUser = ReadonlyProperties<User>;
// The resulting type should be: { readonly id: number; readonly name: string; }

type ReadonlyProperties<T> = {
  readonly [K in keyof T]: T[K];
};
// Test:
type User2 = { id: number; name: string };
type ReadonlyUser = ReadonlyProperties<User2>;
const user2: ReadonlyUser = { id: 1, name: "John" };
// user2.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
