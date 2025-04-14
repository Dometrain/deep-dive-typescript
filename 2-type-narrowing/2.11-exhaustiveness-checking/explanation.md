Problem: You want to be sure that you've handled every possible case in a switch statement.

Solution: Use the `never` type to check for exhaustiveness. This way, TypeScript will throw an error if you haven't handled all possible cases.

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return 0.5 * shape.base * shape.height;
    default:
      const _exhaustiveCheck: never = shape; // error if we don't handle all cases
      return _exhaustiveCheck;
  }
}
```
