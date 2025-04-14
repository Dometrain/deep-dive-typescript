# Readonly utility type

The `Readonly` utility type creates a new type with all readonly properties. You pass it a type, and it returns a new type with all properties set to readonly.

Here's an example:

```ts
type Person = {
  name: string;
  age: number;
};

const person: Readonly<Person> = {
  name: "John Doe",
  age: 30,
};
```

You can also declare a read only array using the `ReadonlyArray` utility type:

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3];
```
