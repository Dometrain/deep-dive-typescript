## Equality narrowing

When working in TypeScript, think in sets. If we can narrow the set, that's generally preferable. In some cases, checking for equality can narrow a type.

```ts
function narrowViaEquality(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  }
}
```

If `x` and `y` are equal, then we know that they must be of the same type. Since x must be a string, we know y is a string if they're strictly equal. So TypeScript narrows the type for y to string.
