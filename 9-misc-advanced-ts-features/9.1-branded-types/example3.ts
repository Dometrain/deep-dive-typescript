// Can't constrain primitive type values

type Age = number;
const age: Age = -1; // Ideally, this would be an error.

type Username = string;
const username: Username = ""; // Ideally, this would be an error.
