// Exercise 1: Eliminate the unnecessary type param
function findMax<T extends number>(numbers: T[]) {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}
