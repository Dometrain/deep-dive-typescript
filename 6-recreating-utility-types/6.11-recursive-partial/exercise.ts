// Exercise: Create a type utility called `RecursivePartial` that recursively
// marks all child object properties as optional.

// Test code
// type Person = {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     country: string;
//   };
//   location: string;
// };

// type PartialPersonWithNested = RecursivePartial<Person>;

// const person: PartialPersonWithNested = {
//   name: "John Doe",
//   address: {
//     city: "New York",
//   },
// };
