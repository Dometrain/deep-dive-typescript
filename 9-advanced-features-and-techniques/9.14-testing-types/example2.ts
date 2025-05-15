// These two types are all you need to test your types...

// 1. Equal - Check if two types are equal
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

// 2. Expect - Fails to compile if the type provided is not true
export type Expect<T extends true> = Equal<T, true>;
