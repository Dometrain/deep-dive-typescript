// Method decorator example 2
// This binds the method to the class instance.
// This isn’t returning anything – so it leaves the original method alone.
// Instead, it adds logic before other fields are initialized.
function bound<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`
    );
  }
  context.addInitializer(function () {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Ron");

// This works fine without the decorator
p.greet();

// This requires the bind decorator to work because the method is not bound
const greet = p.greet;
greet();
