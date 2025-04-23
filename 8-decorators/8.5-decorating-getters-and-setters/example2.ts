// Setter Decorator

function log<This, Args extends any[], Return>(
  originalMethod: Function,
  context: ClassSetterDecoratorContext
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
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  @log
  set name(name: string) {
    this._name = name;
  }
}

const p = new Person("Ron");
p.name = "Cory";
