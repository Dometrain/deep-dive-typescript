// Exercise 1: Basic Readonly
// Question: Create a Readonly version of the following object type and try to modify one of its properties.
// Confirm a TypeScript error occurs when trying to modify the property.

type Business = {
  address: string;
  price: number;
};

const property: Readonly<Business> = {
  address: "456 Elm St",
  price: 500000,
};

// Uncomment the following line to see the error
// property.address = "new"; // Error: Cannot assign to 'address' because it is a read-only property.

// Exercise 2: Readonly Array
// Question: Create a ReadonlyArray of strings and try to push a new string to it.

const names: ReadonlyArray<string> = ["Anne", "Beth", "Chris"];

// Uncomment the following line to see the error
// names.push("4"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Exercise 3: Readonly Function Parameter
// Question: Create a function called printBusiness that takes a Readonly Business (from question 1) as a parameter.
// Try to modify a property inside the function to see the TypeScript error.

function printBusiness(business: Readonly<Business>): void {
  // Uncomment the following line to see the error
  // business.address = "new"; // Error: Cannot assign to 'address' because it is a read-only property.
}
