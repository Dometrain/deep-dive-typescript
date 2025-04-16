// A default type argument makes a generic type more flexible.
// It allows users to omit the type argument when they don't care about it.
// (Useful when the type argument is not essential).
interface Dictionary<T = any> {
  [key: string]: T;
}

// Can omit the type if I want to allow any value
const flexibleDictionary: Dictionary = {
  Alice: 30,
  Bob: "25", // oops
};

// Or can specify a strict type
const numberDictionary: Dictionary<number> = {
  a: 1,
  b: 2,
};
