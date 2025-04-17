// Tip 3: Only use generics when necessary

//  The generic isn't necessary here:
function doubleArray<T extends number>(numbers: T[]): T[] {
  return numbers.map((n) => n * 2) as T[];
}

// This only works with an array of numbers, so a type annotation is enough
function doubleArray2(numbers: number[]) {
  return numbers.map((n) => n * 2);
}

// And generic args should appear twice (remember, they exist to
// enforce correspondence between types):
// This generic is needless - it's only used once, so there's no correspondence.
function sayHi<T extends string>(name: T) {
  console.log("Hi, " + name);
}

// Instead, can simply do:
function sayHi2(name: string) {
  console.log("Hi, " + name);
}
