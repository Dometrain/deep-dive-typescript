// Goal: Allow any value, but provide autocomplete for some values.
// Solution: "Loose autocomplete" via `string & {}`.

// Trick: {} excludes null and undefined, so `string & {}` is equivalent to
// `string`, but the compiler doesn't eagerly reduce it to `string`,
// so it keeps the metadata around for autocomplete when used with a union.
type AnyString = string & {};
type ShoeBrand = "Nike" | "Puma" | "Adidas" | AnyString;

const nike: ShoeBrand = "Adidas"; // Get autocomplete for "Nike", "Puma",...
const value2: ShoeBrand = "On Cloud"; // Allowed, but no autocomplete
