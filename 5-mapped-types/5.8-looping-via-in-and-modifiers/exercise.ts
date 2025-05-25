// Exercise: Mapped Types with the `in` Keyword

// Question 1:
// Create a mapped type `NullableProperties<T>` that makes all properties of a given type `T` nullable.
// Example:
// type User = { id: number; name: string; };
// type NullableUser = NullableProperties<User>;
// The resulting type should be: { id: number | null; name: string | null; }
