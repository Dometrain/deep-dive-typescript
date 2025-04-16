// Can use multiple modifiers at once
type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };

type User = { readonly name?: string; readonly age?: number };

// @ts-expect-error
const jane: MutableRequired<User> = {}; // Error: Property 'name' is missing in type '{}' but required in type 'MutableRequired<User>'.

const cory: MutableRequired<User> = { name: "Cory", age: 1 }; // works
cory.name = "Bob"; // works
