// Four mapped type modifiers:
// 1. `readonly` (Makes properties immutable)
// 2. `-readonly` (Removes readonly, to make properties mutable)
// 3. `?` (Makes properties optional)
// 4. `-?` (Removes optional, to make properties required)

// 3. ? example
type OptionalProperties<T> = {
  [K in keyof T]?: T[K];
};

type User = { id: number; name: string };
type OptionalUser = OptionalProperties<User>;
const user: OptionalUser = {}; // valid
