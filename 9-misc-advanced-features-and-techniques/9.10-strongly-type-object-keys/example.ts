// Problem: object.keys returns string[], but we want the keys as a union of string literals

// Solution:
const typedObjectKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
// usage:
const myObject = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

const wideKeys = Object.keys(myObject); // string[]
const narrowKeys = typedObjectKeys(myObject); // ("name" | "age" | "isStudent")[]
