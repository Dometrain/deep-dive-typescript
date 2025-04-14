// Exercise: Create a utility type called `MyRecord` that creates a dictionary-like type of key/value pairs.
// Hint: It should accept two generic properties:
// 1. `K` - the key, a union of any valid object key
// 2. `V` - the key's value

type MyRecord<K extends string | number | symbol, V> = {
  [Property in K]: V;
};

const userAgeMap: MyRecord<string, number> = {
  laura: 35,
  sam: 12,
};
