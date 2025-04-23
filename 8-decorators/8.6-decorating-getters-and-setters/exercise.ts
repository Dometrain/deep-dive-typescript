// Question 1:
// Create a setter decorator called `logSetter` that logs "name set to 'name here'" when a property is set.
// Apply this decorator to the `name` setter in the `Account` class.

class Account {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const account = new Account("Cory");
account.name = "Alice"; // Logs "name set to 'Alice'"
