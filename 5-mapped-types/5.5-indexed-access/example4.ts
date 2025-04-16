// Tip: Can derive a union from a const array using indexed access too
// Handy when you need a runtime array and a corresponding union
const letters = ["a", "b", "c"] as const;
type Letters = (typeof letters)[number];
//   ^?
