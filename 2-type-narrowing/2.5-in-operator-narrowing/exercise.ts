// Exercise: Type Narrowing with `in` Operator

// Question 1:
// Define a function `getArea` that takes a parameter `shape` which can be either a `Circle` or a `Rectangle`.
// Use the `in` operator to narrow the type and return the area of the shape.

interface Circle {
  radius: number;
  type: "circle";
}

interface Rectangle {
  width: number;
  height: number;
  type: "rectangle";
}

type Shape = Circle | Rectangle;
