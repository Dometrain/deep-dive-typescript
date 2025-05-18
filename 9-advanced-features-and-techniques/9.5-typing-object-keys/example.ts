// Problem: object.keys returns string[]. Too "wide".
// We want the keys as an array of string literals

const user = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

const wideKeys = Object.keys(user); // string[], even if I mark the object as const

// Two ways to narrow the keys

// Option 1. Type assertion
const narrowKeys1 = Object.keys(user) as (keyof typeof user)[];

// Option 2. Generic function.
// 1. Use type constraint to ensure T is an object
// 2. Accept an object of type T
// 3. The return type is an array of keys of T
// 4. Cast the result of Object.keys to an array of T's keys
const typedObjectKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
const narrowKeys2 = typedObjectKeys(user); // ("name" | "age" | "isStudent")[]
