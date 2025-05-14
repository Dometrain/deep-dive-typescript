// Using array.filter
// Common mistake: Needlessly adding type annotations to the callback function

const numbers = [1, 2, 3, 4, 5];
// Also note that you can omit params in the callback function
// (needlessly included here)

// Note, no type annotation needed
const odd = numbers.filter((num) => num % 2 !== 0);
console.log(odd); // [1, 3, 5]
