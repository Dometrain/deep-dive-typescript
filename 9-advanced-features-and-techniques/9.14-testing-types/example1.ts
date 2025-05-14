// Q: Why would I write a test for a type?
// A: Because it's complex, and published via a package or library.

// Not worth testing.
type Vehicle = {
  make: string;
  model: string;
  year: number;
};

// Worth testing.
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
