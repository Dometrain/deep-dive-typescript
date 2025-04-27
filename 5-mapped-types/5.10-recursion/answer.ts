// Exercise 1: Create a recursive `DeepReadonly` type to make all a type's properties readonly

// Example type with nested properties
type User = {
  name: string;
  emails: Email[];
  address: {
    city: string;
    country: string;
  };
};

type Email = {
  email: string;
  type: "work" | "personal";
};

type DeepReadonly<T> = Readonly<{
  [K in keyof T]: T[K] extends number | string | symbol // If key is a primitive, make it readonly
    ? Readonly<T[K]>
    : // If key is an array, make the array readonly, and the items inside readonly too
      T[K] extends Array<infer A>
      ? Readonly<Array<DeepReadonly<A>>>
      : // If an object, make it readonly
        DeepReadonly<T[K]>;
}>;

const user: DeepReadonly<User> = {
  name: "John Doe",
  emails: [{ email: "j@example.com", type: "work" }],
  address: {
    city: "New York",
    country: "USA",
  },
};

// These should all error
// user.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
// user.emails.push({ email: "test@a.com", type: "work" }); // Error: Property 'push' does not exist on type 'readonly string[]'
// user.emails[0].email = "a@b.com"; // Error: Cannot assign to 'email' because it is a read-only property
// user.address.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property

// Exercise 2: Create a recursive type to extract all keys from a nested object

// Example type with nested properties
type Person = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: K | NestedKeys<T[K]>; // Union of key and nested keys
    }[keyof T] // Extract union of all values in the mapped type
  : never;

type PersonKeys = NestedKeys<Person>; // "name" | "address" | "city" | "country"
