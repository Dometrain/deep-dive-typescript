// Question: Implement two field decorators:
// 1. `multiplyByFour` that multiplies a field's value by 4 and logs the value passed in.
// 2. `addTwo` that adds 2 to a field's value and logs the value passed in.
// Apply them to the class field `x` below.

class MyClass {
  x = 1;
}

const obj = new MyClass();
console.log(obj.x); // 9
