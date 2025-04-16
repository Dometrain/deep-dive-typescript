// Same rules as JS args:
// 1. Default value must satisfy the type parameter's constraints
// 2. Default type arguments must be last
interface Dictionary<T extends string | number = string> {
  [key: string]: T;
}

// Fails
// interface Dictionary2<T extends string | number = boolean> {
//   [key: string]: T;
// }
