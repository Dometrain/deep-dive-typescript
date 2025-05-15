// Exercise 1: Use JSDoc syntax to add type information to the function below.
// Try calling the function with different types of arguments to see if the type checking works.

function describeUser(name, age) {
  return `${name} is ${age} years old.`;
}

describeUser("Cory", 1); // Should compile
describeUser("Cory", "1"); // Should not compile
