// If T is a generic type, and T is a union, TypeScript "distributes"
// (loops over) the condition across each member of that union

// Distributive example
// `T` is a union, so TS checks if each member of the union
// is assignable to `number`, one by one
type ToString<T> = T extends number ? "number" : "other";
type Result = ToString<1 | 2 | "hi">; // "number" | "other"

// 1. TS checks if `1` is assignable to `number`. It is, so it returns "number".
// 2. TS checks if `2` is assignable to `number`. It is, so it returns "number".
// 3. TS checks if `"hi"` is assignable to `number`. It's not, so it returns "other".
// So, the final result is "number" | "other"
// If `T` is not a union, TS does not distribute
