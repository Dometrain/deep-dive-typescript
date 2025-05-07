// Narrowing types via filter

// This works fine in TypeScript 5.5+:
const mixedArray: (string | number)[] = ["hi", 123];
const stringArray = mixedArray.filter((value) => typeof value === "string"); // string[]

type User = {
  id: number;
  name?: string;
};

type UserWithName = Required<User>;

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2 },
  { id: 3, name: "Charlie" },
];

// Use type predicate to filter users
const usersWithName = users.filter(
  (user): user is UserWithName => user.name !== undefined
);

usersWithName[0].name; // string
