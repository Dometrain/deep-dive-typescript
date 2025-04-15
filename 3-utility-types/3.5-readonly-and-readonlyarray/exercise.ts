// Exercise 1: Basic Readonly
// Question: Create a Readonly version of `Business` and try to modify one of its properties.
// Confirm a TypeScript error occurs when trying to modify the property.

type Business = {
  address: string;
  price: number;
};

// Exercise 2: Readonly Array
// Question: Create a ReadonlyArray of strings and try to push a new string to it.

// Exercise 3: Readonly Function Parameter
// Question: Create a function called printBusiness that takes a Readonly Business
// (from question 1) as a parameter.
// Try to modify a property inside the function to see the TypeScript error.
