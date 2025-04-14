// This is a decorator factory. It returns a decorator function.
// (Function that returns a decorator function so we can configure it via arguments)
function loggedMethod(headMessage = "LOG:") {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext
  ) {
    const methodName = String(context.name);

    function replacementMethod(this: any, ...args: any[]) {
      console.log(`${headMessage} Entering method '${methodName}'.`);
      const result = originalMethod.call(this, ...args);
      console.log(`${headMessage} Exiting method '${methodName}'.`);
      return result;
    }

    return replacementMethod;
  };
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod("⚠️")
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Cory");
p.greet();
