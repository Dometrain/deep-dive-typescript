// Question 1:
// Create a class decorator called `LogClass` that logs the name of the class when it is instantiated.
// Apply this decorator to the `Person` class below.

class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

const person = new Person("Alice", 30);
