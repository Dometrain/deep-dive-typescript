// Problem: You want a union of a type's keys.
type Person = { name: string; age: number };

// Solution: keyof.
type PersonKey = keyof Person; // "name" | "age"

// If Person changes, this type changes too.
const key: PersonKey = "name"; // fails if not "name" or "age".
