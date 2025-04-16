// `extends` can reference an interface
interface Lengthy {
  length: number;
}

function longest<T extends Lengthy>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

const result = longest([1, 2], [1, 2, 3]); // Returns [1, 2, 3]
const result2 = longest("hi", "hello"); // Returns "hello"
// const result3 = longest(1, 2); // Error. numbers do not have a length property
