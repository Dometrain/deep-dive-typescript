// Get a function's return type
// Uses `R` to represent the function T's return type
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// Example usage
function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetReturnType = ReturnType<typeof greet>; // string
