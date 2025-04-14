# Narrowing via a Type Predicate

Problem: You want to conveniently narrow a type based on a condition, and you want to centralize the narrowing logic to support reuse.

Solution: Create your own type predicate to narrow a type. This is also called a user-defined type guard.

Simple type predicate

```ts
function isString(value: any): value is string {
  return typeof value === "string";
}
```

More complex example with a union type

```ts
function isNumberOrString(value: any): value is number | string {
  return typeof value === "number" || typeof value === "string";
}
```

Narrowing an object type

```ts
function isUser(value: any): value is { name: string } {
  return value && typeof value.name === "string";
}
```
