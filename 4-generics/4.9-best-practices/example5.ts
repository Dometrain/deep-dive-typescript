// Tip 5: Consider using built-in utility types before creating your own.

// Built into TypeScript, no need to create your own.
type Required<T> = {
  [P in keyof T]-?: T[P];
};
