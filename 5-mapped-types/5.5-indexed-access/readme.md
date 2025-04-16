# Index access types

Index access types are a way to create a type that represents the type of a property in another type.

```ts
type Car = { make: string; model: string; year: number; purchased: boolean };
type Model = Car["model"]; // fails if property doesn't exist
```

You can use unions

```ts
type YearOrMake = Car["year" | "make"];
```

You can use keyof to create a union of unique types in the target type

```ts
type AllTypesInCar = Car[keyof Car];
```

You can pass a named union too

```ts
type MakeModel = "make" | "model";
type MakeOrModel = Car[MakeModel];

// Can use number to get the unique types of all an array's elements
const Users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof Users)[number]; // Prettier adds the parens
type Age = (typeof Users)[number]["age"];
```

Get all the types of properties in an object

```ts
type Person = { age: number; name: string; atCodeMash: boolean };
type Properties = Person[keyof Person];
```
