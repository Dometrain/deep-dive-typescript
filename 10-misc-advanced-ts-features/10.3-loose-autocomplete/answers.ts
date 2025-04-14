// Exercise: Loose Autocomplete

// 1. Create a type `ThemeColors` that is a union of "red" | "blue" but also allows any `string`.

type AnyString = string & {};
type ThemeColors = "red" | "blue" | AnyString;

const red: ThemeColors = "red"; // Get autocomplete for "red", "blue"...
const purple: ThemeColors = "purple"; // Allowed, but no autocomplete
