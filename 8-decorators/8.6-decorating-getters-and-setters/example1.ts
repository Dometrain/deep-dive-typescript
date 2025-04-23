// Getter decorator

// Useful for:
// Computing lazily
// Implementing read-only properties
// Validating field assignments

function lazy<This, Return>(
  target: (this: This) => Return,
  context: ClassGetterDecoratorContext<This, Return>
) {
  return function (this: This): Return {
    const value = target.call(this);
    console.log("calling lazy getter");
    // Mark enumerable so it's not re-evaluated
    Object.defineProperty(this, context.name, { value, enumerable: true });
    return value;
  };
}

class MyClass {
  private _expensiveValue: number | null = null;

  // With this decorator, the value is computed only once
  @lazy
  get expensiveValue(): number {
    this._expensiveValue ??= computeExpensiveValue();
    return this._expensiveValue;
  }
}

function computeExpensiveValue(): number {
  // Expensive computation here...
  console.log("computing..."); // only called once
  return 42;
}

const obj = new MyClass();

console.log(obj.expensiveValue);
console.log(obj.expensiveValue);
