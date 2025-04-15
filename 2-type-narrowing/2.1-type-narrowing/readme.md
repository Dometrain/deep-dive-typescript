# Type Narrowing

Sometimes you want to make a value's type more specific.

For example, a variable might be of type `string | number`, but you can check if the value is a `string` to narrow the type.

Some types are more specific than others.

Examples:

- `string` is more specific than `string | number`.
- `User` is more specific than `object`.
- The string literal `submitted` is more specific than `string` or the union type `"submitted" | "pending" | "rejected"`.
- All types are more specific than `any` or `unknown`.

You can think of types as sets of potential values. The more specific the type, the smaller the set of potential values.

The act of converting a general type to a more specific type is called type narrowing.

Type narrowing is a way to tell the compiler that a variable is of a more specific type than its current type. This can be useful when you know that a variable is of a more specific type than its current type, but the compiler doesn't.

TypeScript provides at least 14 ways to narrow a type. We're going to explore all these, how they work, and when to consider each.

1. typeof Type guards
2. Truthiness narrowing
3. Equality narrowing
4. `in` operator narrowing
5. `instanceof` narrowing
6. Control flow analysis
7. Type predicates / user-defined type guards
8. Discriminated unions
9. Assertion functions
10. Exhaustiveness checking via `never`
11. `satisfies` operator
12. Type assertions
13. Generic arguments
14. Non-null assertion

Let's explore each.
