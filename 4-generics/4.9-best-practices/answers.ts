// Exercise 1: Eliminate the unnecessary type param
function findMax(numbers: number[]) {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}
