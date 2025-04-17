// Tip: Consider pushing type params down

// Implicit return type is `any`.
// TS uses the constraint type instead of resolving the type during a call.
function firstElement1<T extends any[]>(array: T) {
  return array[0];
}

function firstElement2<T>(array: T[]) {
  return array[0];
}

const a = firstElement1([1, 2, 3]); // any 👎
const b = firstElement2([1, 2, 3]); // number 👍
