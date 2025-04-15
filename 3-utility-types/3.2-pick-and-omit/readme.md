# Pick and Omit Utility types

Sometimes you'll want to create a new type from an existing type, but with some properties removed or added. TypeScript provides two utility types for this: `Pick` and `Omit`.

Pick creates a new type by selecting properties from an existing type. Omit creates a new type by removing properties from an existing type.

Pick:

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutAge = Pick<User, "id" | "name">;
```

Omit:

```ts
type UserWithoutAge = Omit<User, "age">;
```
