// Question 1: Create a field decorator called `maxLength` that limits the length of a string
// field to 10 characters. If the string is longer than 10 characters,
// it should be sliced to 10 characters.
// Use the ClassFieldDecoratorContext to access the class and field name.
// Apply the decorator to the `name` field in `MyClass`.
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
