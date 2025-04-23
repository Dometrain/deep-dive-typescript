// Question 1:
// Create a method decorator called `logMethod` that logs the name of the method and its arguments
// whenever the method is called. Apply this decorator to the  `greet` method in the `User` class.

class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  @logMethod
  greet(greeting: string) {
    return `${greeting}, my name is ${this.name}.`;
  }
}

function logMethod(originalMethod: any, context: ClassMethodDecoratorContext) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("Method name: " + context.name.toString());
    console.log("Arguments: ", args);
    const result = originalMethod.call(this, ...args);
    return result;
  }
  return replacementMethod;
}

const user = new User("Bob", 25);
console.log(user.greet("Hello"));
