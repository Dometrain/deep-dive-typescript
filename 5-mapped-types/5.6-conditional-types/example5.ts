// When conditional types act on a generic type, they become distributive

// So, given this type:
type ToArray<T> = T extends any ? T[] : never;

// The result is a union of two different types of arrays,
// one for each union member:
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]

// To prevent distribution, two options:
// 1. Add square braces around the keywords on both sides of `extends`
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type ArrOfStrOrNum = ToArrayNonDist<string | number>; // (string | number)[]

// 2. Wrap the type in a tuple (or another container)
type ArrOfStrOrNum2 = ToArray<[string | number]>; // (string | number)[]
