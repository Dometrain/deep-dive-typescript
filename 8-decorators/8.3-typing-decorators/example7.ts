// Class decorator
type Constructor<T = {}> = new (...args: any[]) => T;

// Nesting decorator inside class so the related Set is not exposed
class InstanceCollector {
  instances = new Set();

  apply = <Class extends Constructor>(
    originalClass: Class,
    context: ClassDecoratorContext<Class>
  ) => {
    const _this = this;
    return class extends originalClass {
      constructor(...args: any[]) {
        super(...args);
        _this.instances.add(this);
      }
    };
  };
}

const collector = new InstanceCollector();

@collector.apply
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

console.log("instances: ", collector.instances); // Set(2) { Calculator {}, Calculator {} }
