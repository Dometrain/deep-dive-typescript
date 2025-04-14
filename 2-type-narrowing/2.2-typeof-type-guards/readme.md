## typeof Type guards

JavaScript's `typeof` returns one of the following:

"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"

You can use this result to narrow a type.

For example, this function uses typeof to narrow the union type:

```ts
function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Note that the type is narrower after the `if` statement. TypeScript knows that `value` is a `string` inside the `if` block and a `number` inside the `else` block.
