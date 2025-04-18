// Exercise: Index Access Types

// 1. Given the type below, create:
// - `ProductNameType` - the type of the `name` property.
// - `ProductIdOrNameType` - a union of the types of the `id` and `name` types.
// - `AllTypesInProduct` - a union of all the types in `Product`.
type Product = {
  id: number;
  name: string;
  price: number;
};

// 2. Derive a union type called `Status` from the array below.
const status = ["locked", "unlocked", "pending"] as const;

// 3. Given the tuple below, create a type the represents the first item in the tuple.
type MyTuple = [string, number];

// 4. Given the object literal below, derive 3 things:
// - `User` type
// - `UserPropertyNames` - A union of User's property names
// - `UserPropertyTypes` - A union of User's property types
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

// 5. How does making user readonly change `UserPropertyTypes`?
