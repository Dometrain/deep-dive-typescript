# The `in` operator

The `in` operator is used in three different ways in TypeScript.

1. Looping over an object's keys (a plain JS feature)
2. Safely check if a property exists (we did this in the type narrowing section)

The `in` operator has a third use in TypeScript - to iterate. You can iterate over a union's members or an object's keys. TypeScript's built in `ReadOnly` utility type uses this technique to create a new type with all the properties of an object set to readonly.

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

You can read this as, "For each key in the union of keys in T, create a readonly key in the new type with the same type as the key in T."

In summary, `in` has 3 uses:

| Use Case     | Example              | Purpose                                        |
| ------------ | -------------------- | ---------------------------------------------- |
| For-In Loops | for (key in obj)     | Loop over object keys                          |
| Type Guards  | "prop" in obj        | Check if a property exists at runtime          |
| Mapped Types | [K in keyof T]: T[K] | Iterate over keys to transform type properties |

When iterating over properties via `in`, you can change the properties in the new type using the following modifiers:

| Modifier    | Effect                                       |
| ----------- | -------------------------------------------- |
| `readonly`  | Makes properties immutable                   |
| `-readonly` | Make properties mutable (Removes `readonly`) |
| `?`         | Makes properties optional                    |
| `-?`        | Makes properties required (Removes optional) |

These modifiers can be combined. For example, to make all properties required and mutable:

```ts
type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };

type Example = { readonly name?: string; readonly age?: number };
type Normalized = MutableRequired<Example>;

/*
Normalized:
type Normalized = {
  name: string;
  age: number;
};
*/
```
