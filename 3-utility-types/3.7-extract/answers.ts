// Exercise 1: Extracting types from a union
// Question: Given the following union type, use the Extract utility type to
// create a new type called `StringOrNumber` that only includes the string and number types.

type UnionType = string | number | boolean | null;
type StringOrNumber = Extract<UnionType, string | number>;

// Answer:
type Answer1 = Extract<UnionType, string | number>; // string | number

// Exercise 2: Extracting types from an interface
// Question: Given the following interface, use keyof and the Extract utility type to create a union type called `StringProperties` that
// only includes name and email.

interface Person {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
type StringProperties = Extract<keyof Person, "name" | "email">;

// Answer:
type Answer2 = Extract<keyof Person, "name" | "email">; // 'name' | 'email'
