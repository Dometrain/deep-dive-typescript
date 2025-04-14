// Exercise 1: Exclude from a Custom Type
// Question: Given the custom type `type Status = 'success' | 'error' | 'loading'`, use the Exclude utility type to create a new type called SuccessOrError that excludes `'loading'`.

type Status = "success" | "error" | "loading";

// Exercise 2: Exclude from a Complex Union
// Question: Given the union type `string | number | boolean | (() => void) | { a: number }`, use the Exclude utility type to create a new type that excludes `() => void` and `{ a: number }`.

type ComplexUnion = string | number | boolean | (() => void) | { a: number };
