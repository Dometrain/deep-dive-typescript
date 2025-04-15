TypeScript uses control flow analysis to narrow a type based on the flow of the code.

Here's an example that returns early, which narrows the type:

```ts
function controlFlowExample(x: string | null) {
  if (x !== null) {
    return x.toUpperCase();
  }

  console.log(`${x} is null`);
}
```
