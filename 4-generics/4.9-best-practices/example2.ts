// Tip 2: Use constraints when possible to document intended use cases and
// to provide better type inference.
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
