// Question 1:
// Create a method decorator called `logMethod` that logs the name of the method and its arguments
// whenever the method is called. Apply this decorator to the `greet` method in the `User` class.

class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  greet(greeting: string) {
    return `${greeting}, my name is ${this.name}.`;
  }
}

const user = new User("Bob", 25);
console.log(user.greet("Hello"));
