# Type narrowing via generics

Generics are a way to create code that works with multiple types. We'll explore generics in detail in the next lesson, but we've already worked with a many built-in generic types:

- `Array<T>`: An array of type `T`
- `Promise<T>`: A promise that resolves to type `T`
- `Record<K, V>`: An object with keys of type `K` and values of type `V`

Sometimes a generic type argument works like a type assertion. In these cases, if you provide a type argument, TypeScript will assume that the value is of that type. This is useful when you know more about the type than TypeScript does.

```ts
function getValue<T>(obj: Record<string, T>, key: string): T {
  return obj[key] as T;
}
const obj = { a: 1, b: 2 };
const value = getValue(obj, "a"); // value is of type number
```
