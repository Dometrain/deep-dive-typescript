// Question 1:
// Create a setter decorator called `logSetter` that logs "name set to 'name here'" when a property is set.
// Apply this decorator to the `name` setter in the `Account` class.

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
