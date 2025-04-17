// Type narrowing via exhaustiveness checking
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

function logArea(shape: Shape): void {
  switch (shape.kind) {
    case "circle":
      console.log(Math.PI * shape.radius ** 2);
      break;
    case "square":
      console.log(shape.sideLength ** 2);
      break;
    case "triangle":
      console.log(0.5 * shape.base * shape.height);
      break;
    default:
      const _exhaustiveCheck: never = shape; // error if we don't handle all cases
      return _exhaustiveCheck;
  }
}
