// Pattern: Runtime const array with derived Union Type

const status = ["a", "b", "c"] as const;
type Letters = (typeof status)[number]; // 'a'|'b'|'c';
