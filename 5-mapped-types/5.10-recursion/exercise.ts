// Exercise 1: Create a recursive `DeepReadonly` type to make all a type's properties readonly

// Example type with nested properties
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

// const user: DeepReadonly<User> = {
//   name: "John Doe",
//   emails: [{ email: "j@example.com", type: "work" }],
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// These should all error
// user.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
// user.emails.push({ email: "test@a.com", type: "work" }); // Error: Property 'push' does not exist on type 'readonly string[]'
// user.emails[0].email = "a@b.com"; // Error: Cannot assign to 'email' because it is a read-only property
// user.address.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property

// Exercise 2: Create a recursive type called `NestedKeys` that creates a union all keys from a nested object

// Example type with nested properties
type Person = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
