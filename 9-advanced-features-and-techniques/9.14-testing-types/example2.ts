// Consider testing types when they're complex
// (conditionals, recursion, looping, constraints, etc.)
// Especially important when the type is published via a package or library.

// These two types are all you need to test your types...

// 1. Equal
// This defines a generic func type that returns 1 if the type passed in is assignable to A.
// Then, checks if A is assignable to the function type defined for B.
// Result: If A and B are the same type, the type evaluates true.
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

// Why does this use functions? Because structural typing fights direct comparison.
// Structurally compatible doesn't mean they're the same type.
type A = { a: string };
type B = { a: string; b: number };
type AreEqual = A extends B ? true : false; // false
type AlsoEqual = B extends A ? true : false; // true

// Usage
type Test1 = Equal<1, 1>; // true
type Test2 = Equal<1, number>; // false
type Test3 = Equal<{ a: 1 }, { a: 1 }>; // true
type Test4 = Equal<{ a: 1 }, { a: number }>; // false

// 2. Expect. Fails to compile if the type provided is not true
export type Expect<T extends true> = Equal<T, true>;
