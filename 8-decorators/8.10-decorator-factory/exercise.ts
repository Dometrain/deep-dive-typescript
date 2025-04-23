// Question 1: Create a decorator factory that takes a maxLength parameter
// and returns a decorator that truncates the string to the specified length if it exceeds it.
class MyClass {
  // @maxLength(10) // Uncomment this line to apply the decorator
  name = "This is a long string";
}

const obj = new MyClass();
console.log(obj.name); // "This is a "
