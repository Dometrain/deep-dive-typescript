// Exercise: Understanding Generic Classes in TypeScript

// Question 1:
// Create a generic class called `Stack` that represents a stack data structure.
// The stack should hold a private array of items of type `T`, and support the following operations:
// - `push(item: T): void` to add an item to the stack.
// - `pop(): T | undefined` to remove and return the top item from the stack.
// - `isEmpty(): boolean` to check if the stack is empty.

// Example usage:
// const stack = new Stack<number>();
// stack.push(10);
// stack.push(20);
// console.log(stack.pop()); // Output: 20
// console.log(stack.pop()); // Output: 10
// console.log(stack.isEmpty()); // Output: false
