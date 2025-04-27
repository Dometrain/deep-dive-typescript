# JavaScript vs TypeScript Syntax Summary

| JavaScript Syntax | JavaScript Purpose                                   | TypeScript Type Syntax | TypeScript Purpose                                | TypeScript Example                                     |
| ----------------- | ---------------------------------------------------- | ---------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| `typeof x`        | Returns a string indicating a value's runtime type   | `typeof x`             | Gets a variable's static type                     | `type T = typeof user`                                 |
| `x.y` or `x["y"]` | Accesses a property of an object at runtime          | `T[K]`                 | Indexed access - get type of a type's property    | `type NameType = User["name"]`                         |
| `for...in`        | Iterates over all enumerable properties of an object | `[K in keyof T]`       | Loop over a type's properties                     | `type Readonly<T> = { readonly [K in keyof T]: T[K] }` |
| `?:` (ternary)    | Return one of two values based on a condition        | `T extends U ? X : Y`  | Conditional types                                 | `type IsString<T> = T extends string ? true : false`   |
| N/A               | N/A - Not in JavaScript                              | `K as N`               | Key remapping in mapped types                     | `[K in keyof T as `get${Capitalize<string & K>}`]`     |
| `let`/`const`     | Declares variables                                   | `infer R`              | Declare a type variable in a conditional type     | `T extends Array<infer Item> ? Item : never`           |
| `Object.keys`     | Returns array of object's property names             | `keyof T`              | Get union of all a type's property names          | `type Keys = keyof User` (e.g., "name" \| "email")     |
| Template literals | Creates strings with embedded expressions            | `` `${T}${U}` ``       | Template literal types                            | `` type Url = `https://${string}` ``                   |
| `extends`         | Defines class inheritance                            | `extends`              | Type constraints and conditional type checking    | `T extends string ? X : Y`                             |
| `-` (subtraction) | Arithmetic operator to subtract values               | `-readonly` / `-?`     | Remove readonly or optional modifiers             | `{ -readonly [K in keyof T]: T[K] }`                   |
| `const`           | Declares block-scoped constants                      | `as const`             | Create readonly literal types                     | `const colors = ["red", "blue"] as const`              |
| N/A               | N/A                                                  | `satisfies`            | Validate a value's type without changing its type | `const user = { name: "John" } satisfies User`         |
