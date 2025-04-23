// Question 1: Create a field decorator called `maxLength` that limits the length of a string
// field to 10 characters. If the string is longer than 10 characters,
// it should be sliced to 10 characters.
// Use the ClassFieldDecoratorContext to access the class and field name.
// Apply the decorator to the `name` field in `MyClass`.

class MyClass {
  name = "This is a long string";
}

const obj = new MyClass();
console.log(obj.name); // "This is a "
