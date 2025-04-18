// Question 1:
// Create a type `ArrayElementType<T>` that extracts the type
// of elements in an array `T`.

type ArrayElementType<T> = T extends (infer U)[] ? U : never;

type Test1 = ArrayElementType<string[]>; // string
type Test2 = ArrayElementType<number[]>; // number
type Test33 = ArrayElementType<boolean>; // never

// Question 2:
// Create a type `ReturnType<T>` that extracts the return type
// of a function `T` if one exists, and `never` otherwise.

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Test3 = ReturnType<() => string>; // string
type Test4 = ReturnType<(x: number) => boolean>; // boolean
type Test5 = ReturnType<boolean>; // never
