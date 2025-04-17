// Use `keyof` and `typeof` together to create a union of an object's keys:
const user = {
  name: "Alice",
  age: 15,
};

type UserKey = keyof typeof user; // "name" | "age"
