// Narrowing types via filter

type User = {
  id: number;
  name?: string;
};

type UserWithName = Required<User>;

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Use type predicate to filter users
const usersWithName = users.filter(
  (user): user is UserWithName => user.name !== undefined
);

usersWithName[0].name; // string
