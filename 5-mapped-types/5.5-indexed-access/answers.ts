// Exercise: Index Access Types

// 1. Create a type `GetData` that takes an object type and returns the type of the `data` property.

type GetData<T> = T extends { data: any } ? T["data"] : never;

// Usage
type Result = GetData<{ data: "hi" }>;
type Result2 = GetData<{ data: { name: "hi" } }>;
type Result3 = GetData<"test">; // never

// 2. Create a `Length` type that takes an array type and returns its length.

type Fruit = ["apple", "banana", "cherry"];

// 2 ways to solve this
type Length1<T extends { length: number }> = T["length"];
type Length2<TArray extends any[]> = TArray["length"];

// Usage
type FruitLength = Length1<Fruit>;
