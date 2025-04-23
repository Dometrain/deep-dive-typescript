// Method decorator

// Useful for:
// Tracing invocations
// Binding methods to instances
// Enhancing behavior
// Performance monitoring

// Log method performance
function measure<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  // This assures the decorator is only used as a method decorator
  _context: ClassMethodDecoratorContext
) {
  function replacementFunction(this: This, ...args: Args): Return {
    const start = performance.now();
    const result = originalMethod.call(this, ...args);
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
    return result;
  }
  return replacementFunction;
}

class Person {
  @measure
  greet() {
    console.log("Hi!");
  }
}

const person = new Person();
person.greet(); // Logs "Hi!" and the execution time
