// Question 1: Given the code below, use the `satisfies` keyword to fix the compile error.
type Product = {
  id: number;
  name: string | null;
};

// Declared this way, the type is wider than need be because the id field can be null
const product = {
  id: 1,
  name: "Product 1",
} satisfies Product;

console.log(product.name.toUpperCase());

// Question 2: Given the code below, use the `satisfies` keyword to assure the switch statement exhaustive.
interface Dog {
  kind: "dog";
  breed: string;
}

interface Cat {
  kind: "cat";
  color: string;
}

type Pet = Dog | Cat;

function describePet(pet: Pet) {
  switch (pet.kind) {
    case "dog":
      return `A ${pet.breed} dog.`;
    case "cat":
      return `A ${pet.color} cat.`;
    default:
      pet satisfies never;
  }
}

// Question 3: Eliminate the need for typeof checks below by using `satisfies` keyword to narrow the type.
type VehicleKey = "make" | "model" | "year";

const vehicle = {
  year: 2021,
  make: "Toyota",
  model: "Camry",
} satisfies Record<VehicleKey, string | number>;

console.log(vehicle.make.toUpperCase());
console.log(vehicle.year.toFixed());
