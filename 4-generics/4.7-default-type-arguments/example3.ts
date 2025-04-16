// Like JS args, default type arg value must satisfy the type parameter's constraints
interface Dictionary<T extends string | number = string> {
  [key: string]: T;
}

// Fails
// interface Dictionary2<T extends string | number = boolean> {
//   [key: string]: T;
// }
