# Const Modifier

Sometimes you may want to preserve the literal type passed into a function. You can use the `const` modifier to make a generic type read-only. Then the return type will be narrowed to the literal type passed in.

Here's an example:

```ts
const echo = <const T>(input: T) => {
  return input;
};

const result = echo({ name: "Cory" });
```

With the const modifier, the type of `result` is narrowed to the readonly literal type `{ name: "Cory" }`.

Here's another example:

```typescript
function firstElement<const T extends any[]>(arr: T): T[number] {
  return arr[0];
}
```

In this example, the `T` type parameter is constrained to an array of any type. The `const` keyword before `T` makes the type read-only. This means that the type of `T` cannot be changed within the function, which effectively makes the array read-only, and narrows the return type.
