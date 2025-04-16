// If T is a generic type, and T is a union, TypeScript "distributes" (loops over) the condition across each member of that union

// Distributive example
// `T` is a union, so TS checks if each member of the union is assignable to `number`, one by one
type ToString<T> = T extends number ? "number" : "other";
type Result = ToString<1 | 2 | "hi">; // "number" | "other"
