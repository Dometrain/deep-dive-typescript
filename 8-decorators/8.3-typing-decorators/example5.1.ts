// Accessor Decorator (decorates both getter and setter)
function log<This, Return>(
  target: ClassAccessorDecoratorTarget<This, Return>,
  context: ClassAccessorDecoratorContext<This, Return>
) {
  const result: ClassAccessorDecoratorResult<This, Return> = {
    get(this: This) {
      console.log(`Getting ${context.name.toString()}:`, target.get.call(this));
      return target.get.call(this);
    },
    set(value) {
      console.log(`Setting ${context.name.toString()} to:`, value);
      target.set.call(this, value);
    },
  };
  return result;
}

class User {
  private _name: string = "Default User";

  // Can place beside or above
  @log accessor name = "Cory";

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Alice");
console.log(user.name); // Logs "Getting name: Alice"
user.name = "Bob"; // Logs "Setting name to: Bob"
