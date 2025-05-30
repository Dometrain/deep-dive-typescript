# Generic Param Defaults

You can provide default values for generic type parameters. If the type parameter is not provided, the default type is used.

Here's an example of a Dictionary type that can hold any value by default, but can also be constrained to a specific type if desired:

```typescript
interface Dictionary<T = any> {
  [key: string]: T;
}

// Can omit the type if I want to allow any value
const flexibleDict: Dictionary = { name: "Alice", age: 30 };

// Or can specify a strict type
const numberDict: Dictionary<number> = { a: 1, b: 2 };
```

## Rules

1. A type parameter is considered optional if it has a default.
2. Required type parameters can't follow optional type parameters.

So this won't work. Need to swap order.

```ts
interface ApiResponse<T = unknown, TError> {
  data: T;
  success: boolean;
  error?: TError;
}
```

3. When specifying type arguments, you are only required to specify type arguments for the required type parameters. Unspecified type parameters will resolve to their default types.

```ts
// Note that 2nd type argument can be omitted.
const response: ApiResponse<Error> = { data: { id: 1 }, success: true };
```

4. Default types for a type parameter must satisfy the constraint for the type parameter, if it exists.

```ts
interface Dictionary<T extends string | number = string> {
  [key: string]: T;
}
```

6. If a default type is specified and inference cannot choose a candidate, the default type is inferred.

```ts
// see example 7
```

## Summary

Default type arguments are useful in the real world for:
• API clients (ApiResponse<T = unknown>)
• State management (Store<T = any>)
• Data structures (Dictionary<T = string>)
• UI frameworks (ButtonProps<T = string>)
• Forms (FormValues<T = {}>)
• ORMs (Repository<T = any>)
• Event systems (EventEmitter<T = unknown>)
