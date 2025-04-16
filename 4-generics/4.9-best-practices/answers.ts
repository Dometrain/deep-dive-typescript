// Exercise 1: Eliminate the unnecessary type param
function findMax1<T extends number>(numbers: T[]) {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}

// Answer:
// Works fine without the type param
function findMax2(numbers: number[]) {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}
