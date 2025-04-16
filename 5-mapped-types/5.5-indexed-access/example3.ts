// Array access
type MyTuple = [string, number, boolean];

type Zero = MyTuple[0]; // string
type One = MyTuple[1]; // number
type SomeIndex = MyTuple[0 | 1]; // string | number
type AtAnyIndex = MyTuple[number]; // string | number | boolean

// Use number to get the unique types of all an array's elements
const Users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type User = (typeof Users)[number]; // Get union of unique types in the array (Change one object to see the union)
type Age = (typeof Users)[number]["age"]; // Get union of unique types for `age`. (Change one age to a string to see the union change)
