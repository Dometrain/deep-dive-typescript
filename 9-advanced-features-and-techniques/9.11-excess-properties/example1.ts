// Excess properties are allowed on variables, but not on object literals

type Person = {
  name: string;
};

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

// No type annotation
const person = {
  name: "John Doe",
  age: 30, // Excess property if passed to a function accepting Person
};

// Works. Excess `age` property is ignored. Why? TS assumes we might be using `person` elsewhere
greet(person);

// But, if I call greet with an object literal, I get an error.
// Makes sense to be more strict here - the param is only used here.

// @ts-expect-error
greet({ name: "John Doe", age: 30 }); // Error: Excess property 'age' in type '{ name: string; age: number; }' not allowed in type 'Person'
