# Generics intro

## Generics

I want to start with a word of warning: Generics may seem intimidating at first, but they exist to solve a simple idea: Sometimes you need to write some code that works with multiple types. For example, you might want to write a function that takes an array of any type and returns the first element of the list. You could write a function like this:

```typescript
function firstElement(arr: any[]) {
  return arr[0];
}
```

This function works, but it has a problem: it doesn't provide any type safety, and doesn't specify a return type. If you call it with an array of numbers, it returns a number. If you call it with an array of strings, it return a string. But the function signature doesn't tell you that - it just says that the function takes an array of any type and returns `any`.

TypeScript provides a feature called **generics** that allows you to write functions and classes that work with multiple types in a type-safe way. Generics describe a correspondence between two values.

Here's an important point: If you don't have a correspondence between two values, then you don't need generics!

Here's how you can rewrite the `firstElement` function using generics:

```typescript
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numArray = [1, 2, 3];
```

The generic type variable creates a link between the input and the output. Now the function signature guarantees that the input and output are of the same type. If you call `firstElement` with an array of numbers, it returns a number. If you call it with an array of strings, it returns a string.

This is called a generic function because it uses a generic type variable `T`. The `T` in the function signature is a placeholder for the actual type that will be used when the function is called. When you call the function, TypeScript infers the type of `T` based on the argument you pass in.

The generic argument's name can be anything you want. It's common to use `T` for a single type, as shorthand for "Type". If you have multiple types, you can use `T`, `U`, `V`, etc, but it's generally preferable to use more descriptive names that start with T (e.g. `TArray`, `TElement`, `TKey`, `TValue`, etc).

You can omit the type argument when it can be inferred. For example, if you call `firstElement` with an array of numbers, TypeScript can infer that `T` is `number`, so you don't need to specify it explicitly:

```typescript
const firstNum = firstElement([1, 2, 3]); // Type is inferred as number
```

If you want to specify the type explicitly, you can do so like this:

```typescript
const firstNum = firstElement<number>([1, 2, 3]); // Type is explicitly set to number
```

A function can accept multiple generic types. For example, you can write a function that takes two arguments of different types:

```typescript
function combine<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
```

This function takes two arguments, `a` and `b`, and returns an object that has the properties of both `a` and `b`. The `&` operator combines the two types.
