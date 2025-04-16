# Generic Function Types and Interfaces

Typing generic functions is nearly the same as typing regular functions, but you need to specify the type parameter first.

```ts
function firstElement<T>(arg: T): T {
  return arg;
}

// Function type, with a generic type parameter.
// Note that different identifiers can be used, but signature must be compatible.
let myFirstElement: <Type>(arg: Type) => Type = firstElement;
```

In the example above, `firstElement` is a generic function that takes an argument of type `T` and returns a value of the same type. The variable `myFirstElement` is then defined as a function type that matches the signature of `firstElement`, but uses a different type parameter name (`Type`).

Can write generic type as a call signature of an object literal type too.

```ts
function firstElement<T>(arg: T): T {
  return arg;
}

let myFirstElement: { <Type>(arg: Type): Type } = firstElement;
```
