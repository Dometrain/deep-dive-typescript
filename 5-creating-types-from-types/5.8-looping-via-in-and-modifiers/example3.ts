// Four mapped type modifiers:
// 1. `readonly` (Makes properties immutable)
// 2. `-readonly` (Removes readonly, to make properties mutable)
// 3. `?` (Makes properties optional)
// 4. `-?` (Removes optional, to make properties required)

// 1. readonly example
type RequiredProperties<T> = {
  readonly [K in keyof T]: T[K];
};

type User1 = { id: number; name: string };
type ReadonlyUser = RequiredProperties<User1>;
const user1: ReadonlyUser = { id: 1, name: "John" };
// @ts-expect-error
user1.id = 2; // This should cause a TypeScript error
