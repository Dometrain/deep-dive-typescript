// Symbol example. Like a "private", unique property.
// Useful when I'm creating a library and want to
// add metadata to an object without worrying about name collisions
// with properties in the host code or in other libraries.

const isSerializable = Symbol("isSerializable");
const user = {
  name: "Cory",
  email: "c@example.com",
  [isSerializable]: true, // This is omitted in JSON.stringify
};

console.log(JSON.stringify(user));
