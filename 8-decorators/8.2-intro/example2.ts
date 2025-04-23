// Solution: Use a decorator so we can consistently, easily instrument methods
function log(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("LOG: Entering method.");
    const result = originalMethod.call(this, ...args);
    console.log("LOG: Exiting method.");
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
