// Accessor Decorator example 2
function readOnly<This, Return>(
  target: ClassAccessorDecoratorTarget<This, Return>,
  context: ClassAccessorDecoratorContext<This, Return>
) {
  const result: ClassAccessorDecoratorResult<This, Return> = {
    get(this: This) {
      return target.get.call(this);
    },
    set() {
      throw new Error(
        `Cannot assign to read-only property '${String(context.name)}'.`
      );
    },
  };

  return result;
}

class MyClass {
  @readOnly accessor myValue = 123;
}

const obj = new MyClass();

console.log(obj.myValue);
obj.myValue = 456; // Error: Cannot assign to read-only property 'myValue'.
console.log(obj.myValue);
