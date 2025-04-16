// Get function's return type via conditional type and infer

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type Func = () => number;
type Result = ReturnType<Func>; // number

// @ts-expect-error
type Result2 = ReturnType<string>; // error, since not a function
