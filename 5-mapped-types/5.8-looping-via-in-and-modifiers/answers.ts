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
