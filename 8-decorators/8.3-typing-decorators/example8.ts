// Note broad context type
// Can be used on methods, getters, setters, and fields
function deprecated(target: Function, context: DecoratorContext) {
  const { kind } = context;
  const msg = `${context.name?.toString()} ${kind} is deprecated.`;
  if (kind === "method" || kind === "getter" || kind === "setter") {
    return function (this: any, ...args: any[]) {
      console.log(msg);
      return target.apply(this, args);
    };
  } else if (kind === "field") {
    return function (initialValue: unknown) {
      console.log(msg);
      return initialValue;
    };
  }
}

class MyClass {
  private _name = "This is a long string";

  @deprecated
  get name() {
    return this._name;
  }

  @deprecated
  set name(value: string) {
    this._name = value;
  }

  @deprecated
  doStuff() {
    console.log("Doing stuff");
  }
}

const obj = new MyClass();
obj.doStuff(); // Output: "doStuff is deprecated."
obj.name = "New Name"; // Output: "name is deprecated."
obj.name; // Output: "name is deprecated."
