# typeof

JavaScript already has a `typeof` operator for values. TypeScript has a `typeof` operator for types. TypeScript's `typeof` is useful to create types from other types. `typeof` creates a type from a value.

Example:

```ts
const user = {
  id: 1,
  name: "John Doe",
};

type UserType = typeof user;
```
