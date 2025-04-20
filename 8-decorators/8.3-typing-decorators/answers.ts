// Exercise: Testing Your Knowledge of TypeScript Stage 3 Decorators

// Question 1:
// Create a class decorator called `LogClass` that logs the name of the class when it is instantiated.
// Apply this decorator to the `Person` class below.

@LogClass
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

function LogClass(target: Function) {
  console.log(`Class defined: ${target.name}`);
}

const person = new Person("Alice", 30);

// Question 2:
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

// Question 3:
// Create a property decorator called `logSetter` that logs "name set to 'name here'" when a property is set.
// Apply this decorator to the `name` property in the `Account` class.

class Account {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @logSetter
  set name(name: string) {
    this._name = name;
  }
}

function logSetter<This, Args extends any[], Return>(
  originalMethod: Function,
  context: ClassSetterDecoratorContext
) {
  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`${context.name.toString()} set to '${args[0]}'`);
    const result = originalMethod.call(this, ...args); // Must invoke, since this function replaces the original
    return result;
  }
  return replacementMethod;
}

const account = new Account("Cory");
account.name = "Alice"; // Logs "name set to 'Alice'"
