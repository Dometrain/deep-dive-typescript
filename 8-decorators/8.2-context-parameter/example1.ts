// Use context parameter
function log(
  originalMethod: any,
  context: ClassMethodDecoratorContext // cmd+click to see the structure
) {
  const methodName = context.name.toString();

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
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
  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

const p = new Person("Cory");
p.greet();
