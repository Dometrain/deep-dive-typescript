// Changing key names by remapping via `as`

// General structure example
type MappedTypeExample<Type> = {
  [Keys in keyof Type as KeyType]: Type[Keys];
};

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

// Why `string &` type intersection?
// ----------------------------------------------
// Because TS doesn't know the key's type.

// Example object with all potential valid key types
const testSymbol = Symbol("test");
const test1 = {
  name: "test", // string key
  1: "test", // number key (implicitly converted to string "1")
  [testSymbol]: "test", // symbol key (not converted to string)
};

// Changing values for each key type
test1.name = "new value"; // OK
test1[1] = "new value"; // OK (implicitly converted to string "1")
test1[testSymbol] = "new value"; // OK (symbol key)

// Problem: Symbol isn't valid inside a template string:
// const templateTestSymbol = `test${testSymbol}`; // Error

// Solution: `string &` narrows the key type to string:
type Key = string | number | symbol;
type StringKey = string & Key;
