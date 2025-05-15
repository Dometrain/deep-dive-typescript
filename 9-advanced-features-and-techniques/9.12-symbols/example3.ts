// JS Symbol example.

const isSerializable = Symbol("isSerializable");

const user = {
  name: "Cory",
  email: "c@example.com",
  [isSerializable]: true, // "hidden" - Omitted in JSON.stringify below
};

console.log(JSON.stringify(user));
console.log(user[isSerializable]); // But, can access it directly at runtime via the symbol reference.
