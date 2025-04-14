// `extends` can reference an interface
interface Lengthy {
  length: number;
}

function longest<T extends Lengthy>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
