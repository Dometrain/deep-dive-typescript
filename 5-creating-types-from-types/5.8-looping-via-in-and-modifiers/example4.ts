// Four mapped type modifiers:
// 1. `readonly` (Makes properties immutable)
// 2. `-readonly` (Removes readonly, to make properties mutable)
// 3. `?` (Makes properties optional)
// 4. `-?` (Removes optional, to make properties required)

// 2. -readonly example
type MutableProperties<T> = {
  -readonly [K in keyof T]: T[K];
};

type ImmutableUser = { readonly id: number; readonly name: string };
type MutableUser = MutableProperties<ImmutableUser>;
const john: MutableUser = { id: 1, name: "John" };
john.id = 2; // works
