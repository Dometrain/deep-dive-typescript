// Why require `infer`? Safety.
// TypeScript wants us to be explicit when we're declaring a type variable.
// Inside <>, TS knows we're declaring a type variable.
// But inside the extends clause, TS doesn't know if we're declaring
// a type variable or referencing an existing type.

// Here's an example of where infer can help us catch a typo:

interface User {
  id: number;
}

// Ambiguous. Note typo "Usr" instead of "User".
// Did I intend to reference the interface User?
// Or, did I mean to declare a type variable "Usr"?
// @ts-expect-error
type Example<T> = T extends Usr ? "a" : "b";

// With infer, I'm forced to be explicit. I want to declare a type variable "User".
type Example2<T> = T extends infer User ? "a" : "b";

// So, infer is like let or const.
// `infer` tells the compiler we're declaring a type variable.
// Again, `infer` is ONLY used in one spot: a conditional type's extends clause.
