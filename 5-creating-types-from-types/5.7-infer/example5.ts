// Built-in utility type
// Uses `P` to represent `T`'s parameters.
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// usage examples
type Func = (a: number, b: string) => boolean;
type Args = Parameters<Func>; // [number, string]
type Args2 = Parameters<(a: number) => void>; // [number]
type Args3 = Parameters<() => void>; // []
