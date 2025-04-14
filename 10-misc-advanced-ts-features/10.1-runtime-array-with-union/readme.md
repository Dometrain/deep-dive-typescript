# Runtime Array with Union Type

TypeScript doesn't exist at runtime. So what if you need a union, but you also want to be able to iterate over the values at runtime?

Here's a simple two step solution:

1. First, use a `const` assertion to create a readonly array of values.
2. Then, derive the union from the array. Combine `typeof` with index access types to create a union of the array's values.

Now you get the best of both worlds: a union type and an immutable array that you can also iterate over at runtime.

```ts
const status = ["a", "b", "c"] as const;
type Letters = (typeof list)[number]; // 'a'|'b'|'c';
```
