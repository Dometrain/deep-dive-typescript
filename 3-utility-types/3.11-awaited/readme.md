# Awaited Utility Type

The `Awaited` utility type unwraps the value of a promise. Example:

```ts
type User = {
  id: number;
  name: string;
};
type UserPromise = Promise<User>;
type AwaitedUser = Awaited<UserPromise>; // User
```
