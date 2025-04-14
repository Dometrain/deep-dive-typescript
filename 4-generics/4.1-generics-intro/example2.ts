// Using generic type argument. Traditionally, starts with T, but you can use any valid identifier.
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = firstElement<number>([1, 2, 3]); // Can use explicit type argument...
const firstNumInferred = firstElement([1, 2, 3]); // or let TypeScript infer the type (called type argument inference)

// Works with other types too
const firstString = firstElement(["a", "b", "c"]);
const firstBool = firstElement([true, false]);
