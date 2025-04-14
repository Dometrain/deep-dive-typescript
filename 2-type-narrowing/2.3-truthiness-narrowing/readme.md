## Truthiness narrowing

In JavaScript it's often important to check before you try to run a method. For example, you may want to check if a property exists, or if a value is a string before you move forward.

This approach works in TypeScript too. You can use truthiness to narrow a type. Remember, in JS `null`, `undefined`, `0`, `NaN`, `""`, and `false` are falsy. Everything else is truthy.

For example, this function checks for truthiness to narrow the type.

```ts
function log(value: string | null | undefined) {
  if (value) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is null or undefined.");
  }
}
```

If value is true, TypeScript knows it's a string and can call `toUpperCase()`. If it's false, TypeScript knows it's `null` or `undefined`.
