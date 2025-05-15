// Symbols - Built into JS. A unique and immutable primitive *runtime* value.
// Useful when I'm creating a library and want to
// add metadata to an object without worrying about name collisions
// with properties in the host code or in other libraries.

const symbol1 = Symbol();
const symbol2 = Symbol();

// These will never be equal
// console.log(symbol1 === symbol2); // false

const symbol3 = Symbol("description here"); // optional string key
