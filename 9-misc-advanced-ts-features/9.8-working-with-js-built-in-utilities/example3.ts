// Using array.forEach
// Common mistake: Needlessly adding type annotations to the callback function

const numbers = [1, 2, 3, 4, 5];
const numbersOver3: number[] = [];

// Note, no type annotation needed
numbers.forEach((num) => {
  if (num > 3) numbersOver3.push(num);
});
console.log(numbersOver3); // [4, 5]

// Other examples:
// reduce
// find
// some
// every
// forEach
// etc.
