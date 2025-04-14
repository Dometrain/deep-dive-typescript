// Multiple decorators are applied in order
function multiplyByFour<T>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, number>
) {
  return function (this: T, value: number) {
    console.log("multiplyByFour: ", value);
    return value * 4;
  };
}

function addTwo<T>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, number>
) {
  return function (this: T, value: number) {
    console.log("addTwo: ", value);
    return value + 2;
  };
}

class MyClass {
  @addTwo
  @multiplyByFour
  x = 1;
}

const obj = new MyClass();
console.log(obj.x); // 9
