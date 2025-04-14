# Type Narrowing via a Discriminated Union

Problem: Your code needs to work with multiple types, and you want to narrow a set of types based on a common property.

Solution: Use a discriminated union. A discriminated union sounds complex, but it's not. It's a pattern that uses a common property to narrow a type. This is a powerful pattern that makes your code more readable and maintainable.

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```
