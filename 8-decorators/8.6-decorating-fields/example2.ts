// Field decorator example 2
function maxLength<T>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, string>
) {
  return function (this: T, value: string) {
    console.log("value length: ", value.length);
    // If length is greater than maxLength, slice it to maxLength
    return value.length > 10 ? value.slice(0, 10) : value;
  };
}

class MyClass {
  @maxLength
  name = "This is a long string";
}

const obj = new MyClass();
console.log(obj.name); // "This is a "
