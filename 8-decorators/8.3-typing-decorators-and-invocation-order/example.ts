// Log all the things via decorators

// Decoration invocation order:
// 1. Static Method
// 2. Getter
// 3. Setter
// 4. Accessor
// 5. Plain Method
// 6. Field
// 7. Class
// 8. Constructor
@logClassMetadata
class MyClass {
  @logFieldMetadata
  private _field1: number;
  private _field2: string;

  constructor(field1: number, field2: string) {
    console.log("MyClass constructor");
    this._field1 = field1;
    this._field2 = field2;
  }

  @logGetterMetadata
  get field() {
    return this.field;
  }

  @logSetterMetadata
  set field1(value: number) {
    this._field1 = value;
  }

  @logAccessorMetadata
  accessor field2 = "value2";

  @logMethodMetadata
  static staticMethod() {
    console.log("MyClass static method");
  }

  @logMethodMetadata
  doStuff() {
    console.log("MyClass method");
  }
}

const obj = new MyClass(1, "value");

type Constructor<T = {}> = new (...args: any[]) => T;

function logClassMetadata(value: Constructor, context: ClassDecoratorContext) {
  console.log("Class name: ", context.name);
  console.log("Class kind: ", context.kind);
  console.log("Class metadata: ", context.metadata);
}

function logAccessorMetadata(
  value: unknown,
  context: ClassAccessorDecoratorContext
) {
  console.log("Accessor value: ", value);
  console.log("Accessor name: ", context.name);
  console.log("Accessor kind: ", context.kind);
  console.log("Accessor metadata: ", context.metadata);
  console.log("Accessor private: ", context.private);
  console.log("Accessor static: ", context.static);
}

function logMethodMetadata(
  value: Function,
  context: ClassMethodDecoratorContext
) {
  console.log("Method name: ", context.name);
  console.log("Method kind: ", context.kind);
  console.log("Method metadata: ", context.name);
  console.log("Method private: ", context.private);
  console.log("Method static: ", context.static);
}

function logFieldMetadata<T>(value: T, context: ClassFieldDecoratorContext) {
  console.log("Field name: ", context.name);
  console.log("Field kind: ", context.kind);
  console.log("Field metadata: ", context.metadata);
  console.log("Field private: ", context.private);
  console.log("Field static: ", context.static);
}

function logGetterMetadata(
  value: Function,
  context: ClassGetterDecoratorContext
) {
  console.log("Get value: ", value);
  console.log("Get access: ", context.access);
  console.log("Get name: ", context.name);
  console.log("Get kind: ", context.kind);
  console.log("Get metadata: ", context.metadata);
  console.log("Get private: ", context.private);
  console.log("Get static: ", context.static);
}

function logSetterMetadata(
  value: Function,
  context: ClassSetterDecoratorContext
) {
  console.log("Set value: ", value);
  console.log("Set access: ", context.access);
  console.log("Set name: ", context.name);
  console.log("Set kind: ", context.kind);
  console.log("Set metadata: ", context.metadata);
  console.log("Set private: ", context.private);
  console.log("Set static: ", context.static);
}
