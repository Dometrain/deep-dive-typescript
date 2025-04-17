// When conditional types act on a generic type, they become distributive

// So, given this type:
type ToArray<Type> = Type extends any ? Type[] : never;

// we get this. Note that the result is a union of two different types of arrays, one for each member of the provided union:
type StrArrOrNumArr = ToArray<string | number>;
//  ^  string[] | number[]

// To prevent distribution, two options:
// 1. Add square braces around the keywords on both sides of `extends`
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type ArrOfStrOrNum = ToArrayNonDist<string | number>; // 'ArrOfStrOrNum' is not a union.
// ^ (string | number)[]

// 2. Wrap the type in a tuple (or another container)
type ArrOfStrOrNum2 = ToArray<[string | number]>; // 'ArrOfStrOrNum2' is not a union.
// ^ (string | number)[]
