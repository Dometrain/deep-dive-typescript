# Generic constraints

What if you want to limit the arguments that can be passed to a generic function? TypeScript allows you to specify constraints on generic types using the `extends` keyword.

Here's a generic function that uses a constraint:

```typescript
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
```

This function takes two arguments, `a` and `b`, and returns the longer of the two. The generic type `T` is constrained to objects that have a `length` property of type `number`. This ensures that the `length` property is available on both `a` and `b`.

Read extends as "is a subtype of" or "is assignable to". In this case, `T` must be a subtype of `{ length: number }`.

Another example:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Example usage:
const person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // Should return "Alice"
const age = getProperty(person, "age"); // Should return 25
```

A class can be generic too:

```ts
class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}
```

This class has a generic type `T` that is used to define the type of the items in the queue. The `push` method takes an argument of type `T`, and the `pop` method returns a value of type `T` or `undefined`. This is a great example of how a generic type conveys a type relationship between multiple pieces of code.

Can use the const keyword before extends to make the type read-only. For example:

```ts
function firstElement<const T extends any[]>(arr: T): T[number] {
  return arr[0];
}
```
