// keyof and typeof can be used together to create a union of keys from an existing object:
const user = {
  name: "Alice",
  age: 15,
};

type UserKeys = keyof typeof user; // or just `keyof User` since it's defined above
// ^ "name" | "age"
