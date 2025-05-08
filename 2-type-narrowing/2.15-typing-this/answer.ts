// Exercise 1: Basic `this` typing
// Type the `this` param on the increment method.
const counter = {
  count: 0,
  increment(this: { count: number }) {
    this.count++;
  },
};

// Exercise 2:
// 1. What happens if you call `counter.increment()`?
// 2. What happens if you assign `counter.increment` to a variable and call it?

// Answer:
// 1. Calling `counter.increment()` works as expected, incrementing the `count` property.
// 2. Assigning `counter.increment` to a variable and calling it results in a TypeScript error because `this` is not bound to the `counter` object.

// Exercise 3: Using `this` in a class
// Type the `this` param on the add and subtract methods.
class Calculator {
  value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
  }

  add(this: Calculator, num: number) {
    this.value += num;
  }

  subtract(this: Calculator, num: number) {
    this.value -= num;
  }
}

const calc = new Calculator(10);
calc.add(5);
console.log(calc.value); // 15

// Exercise 4: Add a `this` type for this function
// What happens if you call `obj.double()`? What happens if you call `double()` directly?
function double(this: { value: number }) {
  this.value *= 2;
}

const obj = { value: 10, double };
obj.double(); // 20
// double(); // Error: `this` is not bound to an object with a `value` property.
