// Question 1:
// Create a class decorator called `LogClass` that logs the name of the class when it is instantiated.
// Apply this decorator to the `Person` class below.
// Tip: This need not be as complicated as example.ts.
// See 8.4 for an example of a simple class decorator.

@logClass
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

type Constructor<T = {}> = new (...args: any[]) => T;

function logClass(target: Constructor, context: ClassDecoratorContext) {
  console.log(`Class defined: ${target.name}, ${context.name}`);
}

const person = new Person("Alice", 30);
