// Consider testing types when they're complex (conditionals, recursion, looping, constraints, etc.)
// Especially important when the type is published via a package or library.

// These two types are all you need to test your types...
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;

export type Expect<T extends true> = Equal<T, true>;
