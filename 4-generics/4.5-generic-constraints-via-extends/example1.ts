// Use extends to constrain the type of T to have a length property
// Read this as "given two types `T` that have a length property of type number, return the longer of the two types provided"
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// Example usage:
const result = longest([1, 2], [1, 2, 3]); // Returns [1, 2, 3]
console.log(result);

// Can also use strings since they have a length property too
const result2 = longest("hi", "hello"); // Returns "hello"
console.log(result2);

// Fails because numbers do not have a length property
// const result3 = longest(1, 2); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
