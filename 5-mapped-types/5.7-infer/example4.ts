// Get a function's return type via conditional type and infer
// Uses `R` to represent the function T's return type
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type Func = () => number;
type Result = ReturnType<Func>; // number
// type Result2 = ReturnType<string>; // error, since not a function

// Example with function
function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetReturnType = ReturnType<typeof greet>; // string
