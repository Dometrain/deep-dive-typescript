// @ts-nocheck
// This file is not type-checked

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "John",
  age: "not a number", // No error
};
