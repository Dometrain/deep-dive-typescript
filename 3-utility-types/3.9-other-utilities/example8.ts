// Awaited utility type - recursively unwrap the value of a Promise.

type User = {
  id: number;
  name: string;
};

type UserPromise = Promise<User>;

type AwaitedUser = Awaited<UserPromise>; // { id: number; name: string; }

// Recursively unwrap a nested Promise
type NestedPromise = Awaited<Promise<Promise<number>>>; // number
