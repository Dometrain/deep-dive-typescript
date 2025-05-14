// Symbols - Built into JS. A unique and immutable primitive value.

const symbol1 = Symbol();
const symbol2 = Symbol();

// These will never be equal
// console.log(symbol1 === symbol2); // false

const symbol3 = Symbol("description here"); // optional string key
