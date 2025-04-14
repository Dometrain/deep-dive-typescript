// Exercise: Understanding TypeScript's Required Utility Type

// Question 1:
// Given the following interface, make a new type called RequiredAnimal using the Required utility type.
interface Animal {
  species?: string;
  age?: number;
  habitat?: string;
}

type RequiredAnimal = Required<Animal>;
