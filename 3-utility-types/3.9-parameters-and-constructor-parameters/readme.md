# Parameters Utility Type

To create a tuple type from a function's parameters, you can use the `Parameters` utility type.

Given a function that accepts two arguments:

```ts
function greet(name: string, age: number): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
```

You can create a tuple type from the greet function's parameters using the `Parameters` utility type:

```ts
type GreetParameters = Parameters<typeof greet>; // [name: string, age: number]
```

Or, you can just pass a function type directly:

```ts
type T1 = Parameters<(s: string) => void>; // [s: string]
```

## ConstructorParameters Utility Type

The `ConstructorParameters` utility type is similar to the `Parameters` utility type, but it extracts the parameters of a constructor function instead of a regular function.

```ts
class Coordinate {
  constructor(x: number, y: number) {}
}

type CoordinateConstructor = ConstructorParameters<typeof Coordinate>;
```
