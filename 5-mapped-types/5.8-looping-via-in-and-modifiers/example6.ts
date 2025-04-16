// Four mapped type modifiers:
// 1. `readonly` (Makes properties immutable)
// 2. `-readonly` (Removes readonly, to make properties mutable)
// 3. `?` (Makes properties optional)
// 4. `-?` (Removes optional, to make properties required)

// 4. -? example make all properties of a given type required.
type RequiredProperties<T> = {
  [K in keyof T]-?: T[K];
};

type OptionalUser = { id?: number; name?: string };
type RequiredUser = RequiredProperties<OptionalUser>;
//@ts-expect-error
const user: RequiredUser = {}; // Error: Property 'id' is missing in type '{}' but required in type 'RequiredUser'.
