// Exercise: Type Narrowing with `instanceof`

// Question 1:
// Write a function `isDog` that takes an argument of type `Animal` and returns true if the argument is an instance of `Dog`, otherwise false.

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

// Answer 1:
function isDog(animal: Animal): boolean {
  return animal instanceof Dog;
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Golden Retriever");

console.log(isDog(animal)); // false
console.log(isDog(dog)); // true
