# Infer

Problem: You want to declare a type variable within an extends clause.

Solution: `infer`.

The syntax is as follows:

```ts
type ExtractType<T> = T extends Array<infer ElementType> ? ElementType : never;
```

`infer` has a very specific use - **it's only used within the extends clause of a conditional type**.

This example defines a type `ExtractType` that extracts the element type from an array type. If `T` is an array, it assigns the element type to `ElementType`. If not, it returns `never`.

Some of TypeScript's built-in utility types use `infer` to extract types from other types including `ReturnType`, `InstanceType`, `Parameters`, and `ConstructorParameters`:

```ts
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

This assigns the identifier `P` to the type of the args of the function type `T`.

```ts
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

? U
: unknown;
```

This assigns the identifier `R` to the return type of the function type `T`.
