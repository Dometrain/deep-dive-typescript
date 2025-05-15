// Q: Why would I write a test for a type?
// A: Because it's complex, and published via a package or library.

// Not worth testing.
type Vehicle = {
  make: string;
  model: string;
  year: number;
};

// Consider testing a type when:
// 1. It's complex (conditionals, recursion, looping, constraints, etc.)
// 2. It's published via a package or library.
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
