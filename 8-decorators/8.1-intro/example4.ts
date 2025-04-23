// Log all the things via decorators
// NOTE: Using broad types like DecoratorContext below for simplicity.

// Decoration invocation order:
// 1. Static Method
// 2. Getter
// 3. Setter
// 5. Plain Method
// 6. Field
// 7. Class
// 8. Constructor
@logClassMetadata
class MyClass {
  @logFieldMetadata
  private _field = "value";

  constructor() {
    console.log("MyClass constructor");
  }

  @logGetterMetadata
  get field() {
    return this._field;
  }

  @logSetterMetadata
  set field(value: string) {
    this._field = value;
  }

  @logMethodMetadata
  static staticMethod() {
    console.log("MyClass static method");
  }

  @logMethodMetadata
  doStuff() {
    console.log("MyClass method");
  }
}

const obj = new MyClass();

type Constructor<T = {}> = new (...args: any[]) => T;

function logClassMetadata(value: Constructor, context: DecoratorContext) {
  console.log("Class name: ", context.name);
  console.log("Class kind: ", context.kind);
  console.log("Class metadata: ", context.metadata);
}

function logMethodMetadata(value: Function, context: DecoratorContext) {
  console.log("Method name: ", context.name);
  console.log("Method kind: ", context.kind);
  console.log("Method metadata: ", context.name);
}

function logFieldMetadata(value: unknown, context: DecoratorContext) {
  console.log("Field value: ", value);
  console.log("Field name: ", context.name);
  console.log("Field kind: ", context.kind);
  console.log("Field metadata: ", context.metadata);
}

function logGetterMetadata(value: unknown, context: DecoratorContext) {
  console.log("Get value: ", value);
  console.log("Get name: ", context.name);
  console.log("Get kind: ", context.kind);
  console.log("Get metadata: ", context.metadata);
}

function logSetterMetadata(value: Function, context: DecoratorContext) {
  console.log("Set value: ", value);
  console.log("Set name: ", context.name);
  console.log("Set kind: ", context.kind);
  console.log("Set metadata: ", context.metadata);
}
