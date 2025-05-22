// Changing key names by remapping via `as`

// Basic key remapping
type RenameKeys<T> = {
  [K in keyof T as `new_${string & K}`]: T[K];
};

// Example usage
type Original = {
  id: number;
  name: string;
};

type Renamed = RenameKeys<Original>;

// ----------------------------------------------

// Why `string &` type intersection?
// Because TS doesn't know the key's type.

// Example object with all potential valid key types
const testSymbol = Symbol("test");
const test1 = {
  name: "test", // string key
  1: "test", // number key (implicitly converted to string "1")
  [testSymbol]: "test", // symbol key (not converted to string)
};

// Problem: Symbol isn't valid inside a template string:
// const templateTestSymbol = `test${testSymbol}`; // Error

// Solution: `string &` narrows the key type to string:
type Key = string | number | symbol;
type StringKey = string & Key;
