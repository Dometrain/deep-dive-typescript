// Problem: You want to declare a type variable within an extends clause.
// Solution: `infer`. It's ONLY used in a conditional type's extends clause.

type ArrayType<T> = T extends Array<infer ElementType> ? ElementType : never;

// Example usage
type Str = ArrayType<string[]>; // string
type Num = ArrayType<number[]>; // number
type Never = ArrayType<string>; // never

// Fails. ElementType is not declared via `infer`:
//@ts-expect-error
type ArrayTypeBroken<T> = T extends Array<ElementType> ? ElementType : never;
