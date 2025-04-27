# JavaScript vs TypeScript Syntax Summary

| JavaScript Syntax | TypeScript Type Syntax | TypeScript Purpose                                | TypeScript Example                                           |
| ----------------- | ---------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| `typeof x`        | `typeof x`             | Gets a variable's type                            | `type T = typeof user` (TS: extracts user's type)            |
| `x.y` or `x["y"]` | `T[K]`                 | Indexed access - get type of a type's property    | `type NameType = User["name"]`                               |
| `for...in`        | `[K in keyof T]`       | Loop over all a type's properties                 | `type Readonly<T> = { readonly [K in keyof T]: T[K] }`       |
| `?:` (ternary)    | `T extends U ? X : Y`  | Conditional types                                 | `type IsString<T> = T extends string ? true : false`         |
| `as` (not in JS)  | `K as N`               | Key remapping in mapped types                     | `[K in keyof T as `get${Capitalize<string & K>}`]`           |
| `let`/`const`     | `infer R`              | Declare a type variable within a conditional type | `T extends Array<infer Item> ? Item : never`                 |
| `Object.keys`     | `keyof T`              | Get union of all property names in a type         | `type Keys = keyof User` (e.g., "name" \| "email")           |
| Template literals | `` `${T}${U}` ``       | Template literal types                            | `` type Url = `https://${string}` ``                         |
| `extends`         | `extends`              | Type constraints, and conditional type checking   | `interface Dog extends Animal`<br>`T extends string ? X : Y` |
| `-` (subtraction) | `-readonly` / `-?`     | Remove readonly or optional modifiers             | `{ -readonly [K in keyof T]: T[K] }`                         |
| `const`           | `as const`             | Create readonly literal types                     | `const colors = ["red", "blue"] as const`                    |
| N/A               | `satisfies`            | Validate a value's type without changing its type | `const user = { name: "John" } satisfies User`               |
