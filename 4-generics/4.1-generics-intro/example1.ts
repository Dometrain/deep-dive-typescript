// A function that works with any type of array
function firstElement(arr: any[]) {
  return arr[0];
}

// Problem: Not type-safe. Returns any.
const firstString = firstElement(["a", "b", "c"]);
const firstBool = firstElement([true, false]);
