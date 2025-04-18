// Exercise: Conditional Types in TypeScript

// Question 1:
// Create a type `IsString<T>` that evaluates to `true`
// if `T` is a string, and `false` otherwise.

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Question 2:
// Create a type `ExcludeType<T, U>` that removes `U` from `T`.

type ExcludeType<T, U> = T extends U ? never : T;

type Test3 = ExcludeType<string | number | boolean, boolean>; // string | number
type Test4 = ExcludeType<"a" | "b" | "c", "a" | "c">; // 'b'

// Question 3:
// Create a type `NonNullableType<T>` that removes `null` and `undefined` from `T`.

type NonNullableType<T> = T extends null | undefined ? never : T;

type Test5 = NonNullableType<string | null | undefined>; // string
type Test6 = NonNullableType<number | undefined>; // number

// Question 4:
// Create a type `GetData` that takes an object type and returns
// the type of the `data` property.

type GetDataType<T> = T extends { data: any } ? T["data"] : never;

// Usage
type Result = GetDataType<{ data: "hi" }>; // "hi"
type Result2 = GetDataType<{ data: { name: "hi" } }>; // { name: "hi" }
type Result3 = GetDataType<"test">; // never
