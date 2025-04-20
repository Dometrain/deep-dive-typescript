// Exercise: Create a utility type called `MyNonNullable` that excludes null and undefined from T

// 1. For each union member in T, if the member is null or undefined, exclude it.
// 2. Otherwise, keep it.
type MyNonNullable<T> = T extends null | undefined ? never : T;

// Test
type IdOrNull = string | number | null;
type Id = MyNonNullable<IdOrNull>; // string | number

// Note, TypeScript's implementation is:
type NonNullable<T> = T & {};

// Why? In TS, {} can be anything except null or undefined,
// So, {} with the union operator strips null and undefined:
type A = string | null | undefined;
type B = A & {}; // string
