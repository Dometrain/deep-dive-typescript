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

type ProductNameType = Product["name"];
type ProductIdOrNameType = Product["id" | "name"];
type AllTypesInProduct = Product[keyof Product];

// 2. Derive a union type called `Status` from the array below.
const status = ["locked", "unlocked", "pending"] as const;
type Status = (typeof status)[number]; // "locked" | "unlocked" | "pending"

// 3. Given the tuple below, create a type the represents the first item in the tuple.
type MyTuple = [string, number];
type FirstItem = MyTuple[0]; // string

// 4. Given the object literal below, derive 3 things:
// - `User` type
// - `UserPropertyNames` - A union of User's property names
// - `UserPropertyTypes` - A union of User's property types
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
} as const;

type User = typeof user; // { name: string; age: number; isAdmin: boolean }
type UserPropertyNames = keyof User; // "name" | "age" | "isAdmin"
type UserPropertyTypes = User[keyof User]; // string | number | boolean

// 5. How does making user readonly change `UserPropertyTypes`?

// Narrower type: true | 30 | "Alice"
