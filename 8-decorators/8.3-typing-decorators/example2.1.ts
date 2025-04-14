// Method decorator

// Useful for:
// Tracing invocations
// Binding methods to instances
// Enhancing behavior
// Performance monitoring

// Tip: cmd+click on ClassMethodDecoratorContext, then search for DecoratorContext< to see all 6 options
function log<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args); // Must invoke, since this function replaces the original
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @log
  greet(this: Person): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Person("Ron");
const greet = p.greet();
