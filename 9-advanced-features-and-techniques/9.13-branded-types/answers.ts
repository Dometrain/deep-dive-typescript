// Exercise: Branded Types in TypeScript

// Question 1:
// Create a branded type `Username` that is a string.

declare const usernameSymbol: unique symbol;
type Username = string & { [usernameSymbol]: void };
// or
// type Username = string & { __brand: "username" };
// or
// type Username = string & { __username: "username" };

// Question 2:
// Create two functions:
// 1. `assertUsername` - An assertion function that accepts a string and assures it's
// 2. `toUsername` - A type predicate that calls `assertUsername`, then converts a string to a `Username`
// via a type assertion.

// Type predicate to convert a string to Username
function toUsername(username: string): Username {
  assertUsername(username);
  return username as Username;
}

// Assertion function to validate the value at runtime
function assertUsername(value: string): asserts value is Username {
  if (value.length < 3)
    throw new Error("Username must be at least 3 characters");
}

// Question 3:
// Create a function called logUsername that accepts a Username and logs it to the console.
// Call the `toUsername` function created in Question 2 to safely convert a string to a Username.
function logUsername(username: Username): void {
  console.log(`Username: ${username}`);
}

const username = toUsername("Cory");
logUsername(username);
