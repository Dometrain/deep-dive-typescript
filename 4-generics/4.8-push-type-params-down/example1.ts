// Tip: Push type params down

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  // Implicit return type is `any`.
  // TS uses the constraint type above instead of resolving the type during a call.
  return arr[0];
}

const a = firstElement1([1, 2, 3]);
// ^ const a: number 👍

const b = firstElement2([1, 2, 3]);
// ^ const b: any 🚩
