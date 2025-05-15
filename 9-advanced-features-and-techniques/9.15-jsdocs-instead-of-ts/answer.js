// Exercise 1: Use JSDoc syntax to add type information to the function below.
// Try calling the function with different types of arguments to see if the type checking works.

/**
 * Describe a user via a string.
 * @param {string} name - The user's name.
 * @param {number} age - The user's age.
 * @returns {string} - The formatted user info.
 */
function describeUser(name, age) {
  return `${name} is ${age} years old.`;
}

describeUser("Cory", 1); // Should compile
describeUser("Cory", "1"); // Should not compile
