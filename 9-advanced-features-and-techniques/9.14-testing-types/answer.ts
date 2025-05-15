import { Equal, Expect } from "./example2";

// Exercise 1: Use the Equal and Expect types in the example2.ts file to test the `RenameKeys` type.
// This type should rename all keys in an object type to have a prefix of `new_`.
// Use the `User` type below to test the `RenameKeys` type.

type RenameKeys<T> = {
  [K in keyof T as `new_${string & K}`]: T[K];
};

// Example usage
type User = {
  id: number;
  name: string;
};

type shouldPrependNewAndKeepExistingTypeForAllKeys = Expect<
  Equal<
    RenameKeys<User>,
    {
      new_id: number;
      new_name: string;
    }
  >
>;
