// Exercise: TypeScript Generic Constraints

// 1: Enhance the class `Queue` to ensure that it only
// accepts a `number` or a `string` as its type parameter `T`.
class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

// 2. Create a generic interface `Identifiable` with a single property `id` of type `number`.
// Then create a function `findById` that takes an array of `Identifiable` objects and an `id`,
// and returns the object with the matching `id`.

// Example usage:
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// const user = findById(users, 1); // Should return { id: 1, name: "Alice" }

// 3. Create a generic function called `findKeyByValue` that accepts two arguments, an object of key/value pairs, and a value to find.
// The function should return the corresponding key for the provided value, or undefined if the provided value isn't found in the provided object.
// Use two generic type arguments. The first type argument `TObject` will represent the type of the object passed in.
// The second type argument will represent the value's type, with a name of `TValue`.
// Use extends to constrain `TObject` to be an object with string keys and values of type `TValue`.

// Usage:
// const ageMap = { sam: 12, tina: 22, larry: 34 };
// const userName = findKeyByValue(ageMap, 22); // Type: string | undefined
// console.log(userName); // "tina"
// const nonExistentUser = findKeyByValue(ageMap, 40); // Type: string | undefined
// console.log(nonExistentUser); // undefined
