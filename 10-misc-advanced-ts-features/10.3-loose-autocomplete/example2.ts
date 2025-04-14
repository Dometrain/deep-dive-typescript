// Or, via type:
type LiteralUnion<T extends U, U = string> = T | (U & {});
let x: LiteralUnion<"hello" | "hi">;
x = "hi"; // Allowed, but no autocomplete
x = "h";

// Or, via https://github.com/sindresorhus/type-fest/blob/main/source/literal-union.d.ts

// More on this:
// https://github.com/microsoft/TypeScript/issues/29729
// https://stackoverflow.com/questions/75262513/what-is-the-purpose-of-string
