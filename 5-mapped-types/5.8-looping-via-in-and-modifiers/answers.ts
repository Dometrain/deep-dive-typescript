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
