# Summary

We just explored 13 ways to narrow a type.

This table shows an example of each, and describes how each works.

| Type Narrowing Method                         | Example                                                                | How it works                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1. `typeof` Type guards                       | `if (typeof value === "string") { ... }`                               | Check variable's type at runtime.                                              |
| 2. Truthiness narrowing                       | `if (value) { ... }`                                                   | Check if a value is truthy or falsy.                                           |
| 3. Equality narrowing                         | `if (value === null) { ... }`                                          | Check for specific values like `null`, `undefined`, or `NaN`.                  |
| 4. `in` operator narrowing                    | `if ("property" in object) { ... }`                                    | Check if an object has a property.                                             |
| 5. `instanceof` narrowing                     | `if (value instanceof Date) { ... }`                                   | Check if an object is an instance of a specific class or constructor function. |
| 6. Control flow analysis                      | `if (condition) { ... } else { ... }`                                  | Narrow based on condition such as if/else.                                     |
| 7. Type predicates / user-defined type guards | `function isString(value: any): value is string { ... }`               | Reusable function that narrows type.                                           |
| 8. Discriminated unions                       | `if (value.type === "A") { ... }`                                      | Narrow based on a common property.                                             |
| 9. Assertion functions                        | `function assertIsString(value: any): asserts value is string { ... }` | Function that asserts a value is of a specific type.                           |
| 10. Exhaustiveness checking via `never`       | `function assertNever(value: never): never { ... }`                    | Ensures a switch handles all cases.                                            |
| 11. `satisfies` Operator                      | `const value = { type: "A" } satisfies { type: "A": "B" }`             | Ensure a value satisfies a given type, but keep the most specific type.        |
| 12. Type assertions                           | `const value = someValue as string`                                    | Treat a value as a specific type, **dangerously**.                             |
| 13. Non-null assertion                        | `const value = someValue!`                                             | Tell TypeScript that a value is not null or undefined, **dangerously**.        |

Also, there are many third-party libraries that assist with type narrowing at runtime including Zod, Valibot, tiny-invariant, typia, and io-ts. We'll explore Zod later - it's the most popular choice for runtime validation.
