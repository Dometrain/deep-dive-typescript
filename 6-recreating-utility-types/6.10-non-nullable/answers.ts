// Exercise: Create a utility type called `MyNonNullable` that excludes null and undefined from T

type MyNonNullable<T> = T extends null | undefined ? never : T;

// Test
type IdOrNull = string | number | null;
type Id = MyNonNullable<IdOrNull>; // string | number

// Note, TypeScript's implementation is:
type NonNullable<T> = T & {};

// Why? In TS, {} can be anything except null or undefined,
// so using {} with the union operator strips null and undefined:
type A = string | null | undefined;
type B = A & {}; // string
