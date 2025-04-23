// Question: Implement two field decorators:
// 1. `multiplyByFour` that multiplies a field's value by 4 and logs the value passed in.
// 2. `addTwo` that adds 2 to a field's value and logs the value passed in.
// Apply them to the class field `x` below.
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
