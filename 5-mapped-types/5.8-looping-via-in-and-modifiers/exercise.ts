// Exercise: Mapped Types with the `in` Keyword

// Question 1:
// Create a mapped type `NullableProperties<T>` that makes all properties of a given type `T` nullable.
// Example:
// type User = { id: number; name: string; };
// type NullableUser = NullableProperties<User>;
// The resulting type should be: { id: number | null; name: string | null; }

// Question 2:
// Create a mapped type `PickProperties<T, K>` that picks only the properties of `T` whose keys are in `K`.
// Example:
// type User = { id: number; name: string; age: number; };
// type PickedUser = PickProperties<User, "id" | "name">;
// The resulting type should be: { id: number; name: string; }

// Question 3:
// Create a mapped type `ReadonlyProperties<T>` that makes all properties of a given type `T` readonly.
// Example:
// type User = { id: number; name: string; };
// type ReadonlyUser = ReadonlyProperties<User>;
// The resulting type should be: { readonly id: number; readonly name: string; }
