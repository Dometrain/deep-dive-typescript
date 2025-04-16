# Generics Best Practices

1. Use descriptive generic type names when necessary. Use plain `T` or `Type` when the meaning is clear, such as when there's only a single type argument.

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

2. Use constraints when possible to document intended use cases and to provide better type inference.

```ts
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
```

3. Only use generics when necessary.

The generic isn't necessary here:

```ts
function doubleArray<T extends number>(numbers: T[]): T[] {
  return numbers.map((n) => n * 2);
}
```

Could just limit the type

```ts
function doubleArray(numbers: number[]): number[] {
  return numbers.map((n) => n * 2);
}
```

4. Use default generic types when possible to save people some keystrokes.

```ts
type ApiResponse<T = unknown> = {
  data: T;
  status: number;
};
```
