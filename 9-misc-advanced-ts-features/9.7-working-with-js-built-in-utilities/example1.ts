// Using array.map
// Common mistake: Needlessly adding type annotations to the callback function

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2); // Note, no type annotation needed
console.log(doubled); // [2, 4, 6, 8, 10]
