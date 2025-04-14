# Exclude utility type

Exclude works similarly to Omit, but is designed for union types. So if you have a union type and want to remove some of the options from it, use Exclude.

```ts
type Color = "red" | "green" | "blue";

type NotRed = Exclude<Color, "red">; // 'green' | 'blue'
```

In this example, we have a union type Color that can be either "red", "green", or "blue". We want to create a new type that excludes the "red" option. We can use Exclude for that.

You can exclude multiple items via the pipe operator:

```ts
type Color = "red" | "green" | "blue" | "yellow" | "purple";
type StoplightColors = Exclude<Color, "purple" | "blue">; // 'red' | 'green' | 'blue'
```
