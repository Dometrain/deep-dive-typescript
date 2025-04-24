// Question 1: Given the function below, log x and y if they are equal.
// Note the types of x and y after the equality check.
function logIfEqual(x: string | number, y: number | boolean) {
  if (x === y) {
    // We can now call any 'number' method on 'x' or 'y'.
    console.log(x, y);
  }
}
