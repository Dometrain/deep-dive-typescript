# Sting Manipulation Utilities

TypesScript provides 4 built-in string manipulation utilities `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`. These are unique because unlike the other utilities, we can't implement these ourselves. These utilities use the `intrinsic` keyword which means they are built into the TypeScript compiler.

The `intrinsic` keyword isn't documented publicly because it's not intended for public use. It's used internally by the TypeScript compiler to provide these utilities.

```ts
// Uppercase => ALL CAPS
type UppercaseMessage = Uppercase<"hello world">; // 'HELLO WORLD'

// Lowercase => all lower case
type LowercaseMessage = Lowercase<"HELLO WORLD">; // 'hello world'

// Capitalize => Capitalize the first letter
type CapitalizeMessage = Capitalize<"hello world">; // 'Hello world'

// Uncapitalize => Uncapitalize the first letter
type UncapitalizeMessage = Uncapitalize<"Hello World">; // 'hello World'

// Note compile-time checks for the correct usage below
const upper: UppercaseMessage = "HELLO WORLD";
const lower: LowercaseMessage = "hello world";
const capital: CapitalizeMessage = "Hello world";
const uncapital: UncapitalizeMessage = "hello World";
```

You might wonder why these utilities are useful. Why not just use JavaScript's built-in string manipulation like `toUpperCase`, or `toLowerCase`? The reason is these TypeScript string manipulation utilities are type-safe. They are type safe, and can be used in other type-level operations.

For example, I could declare a function that only accepts a string that is all uppercase.

```ts
function logWarning(message: Uppercase<string>) {
  console.warn(message);
}

// Compiles
logWarning("HELLO WORLD");

// Won't compile
// logWarning("hello world");
```

## Implementation

These utilities are implemented in the TypeScript compiler using the `intrinsic` keyword. The `intrinsic` keyword is used to indicate that a type is built into the TypeScript compiler and cannot be implemented in user code.
