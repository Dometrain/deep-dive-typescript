// How Equal works:
// The Equal type uses conditional types and function types to determine if two types are equal.
// 1. Defines a generic func type that returns 1 if the type passed in is assignable to A.
// 2. Defines a generic func that returns 1 if A is assignable to the function type defined for B.
// 3. Result? If A and B are the same type, the type evaluates true.
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

// Usage
type Test1 = Equal<1, 1>; // true
type Test2 = Equal<1, number>; // false
type Test3 = Equal<{ a: 1 }, { a: 1 }>; // true
type Test4 = Equal<{ a: 1 }, { a: number }>; // false

// Why compare functions in the Equal type above?
// In short, TS function compatibility is stricter than object compatibility.
// Using a function in Equal<A, B> ensures that only truly identical types are considered equal, not just structurally compatible ones.

// Long answer:
// Functions are used in the Equal<A, B> generic type to prevent TypeScript's structural type system
// from treating different but structurally compatible types as equal.
// In TS, two types with the same structure are considered compatible—even if they're not exactly the same type.
// Example: Directly comparing types like { a: string } and { a: string; b: number } can yield unintuitive results.

// Structurally compatible doesn't mean they're the same type.
type A = { a: string };
type B = { a: string; b: number };
type AreEqual = A extends B ? true : false; // false
type AlsoEqual = B extends A ? true : false; // true

// By wrapping the types in a generic function type (<T>() => ...), we force TypeScript to compare the types in a way
// that respects their exact structure, not just their structural compatibility.
