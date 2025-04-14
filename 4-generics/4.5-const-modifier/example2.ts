// With `const`, T is inferred as the literal type (rather than a broader type).
function firstElement<const T extends any[]>(arr: T): T[number] {
  return arr[0];
}

// With const above, the resulting type is narrower. It's "1 | 2 | 3" instead of number
const element = firstElement([1, 2, 3]);
console.log(element); // 1
