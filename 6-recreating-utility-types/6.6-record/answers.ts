// Exercise: Create a utility type called `MyRecord` that creates a dictionary-like type of key/value pairs.
// Hint: It should accept two generic properties:
// 1. `K` - the key, a union of any valid object key
// 2. `V` - the key's value

// 1. Accept a key type called `K` that's either a string, number, or symbol.
// 2. Accept a value type called `V`.
// 3. Map over the keys in `K` and set the value's type to `V`.
type MyRecord<K extends string | number | symbol, V> = {
  [Property in K]: V;
};

const userAgeMap: MyRecord<string, number> = {
  laura: 35,
  sam: 12,
};
