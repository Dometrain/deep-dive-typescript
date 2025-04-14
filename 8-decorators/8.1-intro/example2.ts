// 2nd arg is the context object. Using `any` for now to keep example simple
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
