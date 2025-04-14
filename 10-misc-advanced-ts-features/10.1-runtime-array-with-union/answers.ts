// Exercise: Derive a union from an array

// Question 1: Create an array of strings representing different colors called `colors`.
// Derive a union type called `Colors` from this array.
const colors = ["red", "green", "blue"] as const;
type Colors = (typeof colors)[number]; // 'red' | 'green' | 'blue'
