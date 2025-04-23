// Field decorator

// Uses:
// Changing/enhancing field initialization logic
// Validating field values

function addOne<T>(target: T, context: ClassFieldDecoratorContext<T, number>) {
  return function (this: T, value: number) {
    console.log("addOne: ", value); // 3
    return value + 1;
  };
}

class MyClass {
  @addOne
  x = 1;
}

console.log(new MyClass().x); // 2
