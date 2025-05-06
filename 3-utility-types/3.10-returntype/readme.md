# ReturnType Utility Type

Sometimes, you may want to extract the return type of a function. The `ReturnType` utility type allows you to do just that. This is particularly useful when you want to create a type that is based on the return type of another function without having to explicitly define it.

```ts
function getUser() {
  return {
    id: 1,
    name: "John Doe",
  };
}

type UserReturnType = ReturnType<typeof getUser>; // { id: number; name: string; }
```
