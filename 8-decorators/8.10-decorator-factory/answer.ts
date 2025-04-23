// Question 1: Create a decorator factory that takes a maxLength parameter
// and returns a decorator that truncates the string to the specified length if it exceeds it.
function maxLength<T>(
  maxLength: number
): (target: undefined, context: ClassFieldDecoratorContext<T, string>) => any {
  return function (
    target: undefined,
    context: ClassFieldDecoratorContext<T, string>
  ) {
    return function (this: T, value: string) {
      console.log("value length: ", value.length);
      // If length is greater than maxLength, slice it to maxLength
      return value.length > maxLength ? value.slice(0, maxLength) : value;
    };
  };
}

class MyClass {
  @maxLength(10)
  name = "This is a long string";
}

const obj = new MyClass();
console.log(obj.name); // "This is a "
