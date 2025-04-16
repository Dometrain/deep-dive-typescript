// Generic constraints
// Use extends to constrain the type of T to have a length property
// Read this as "given two types `T` that have a length property of type number,
// return the longer of the two types provided"
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

const result = longest([1, 2], [1, 2, 3]); // Returns [1, 2, 3]
const result2 = longest("hi", "hello"); // Returns "hello"
// const result3 = longest(1, 2); // Error. numbers do not have a length property
