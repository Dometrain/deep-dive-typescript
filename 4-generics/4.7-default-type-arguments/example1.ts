// A default type argument can make a generic type more flexible by
// allowing users to omit the type argument when they don't care about it.
// This can be useful when the type argument is not essential for the type
// to work correctly.
interface Dictionary<T = any> {
  [key: string]: T;
}

// Can omit the type if I want to allow any value
const flexibleDict: Dictionary = { name: "Alice", age: 30 };

// Or can specify a strict type
const numberDict: Dictionary<number> = { a: 1, b: 2 };
