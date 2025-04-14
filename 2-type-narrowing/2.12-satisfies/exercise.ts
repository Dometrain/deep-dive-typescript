// Question 1: Given the code below, use the `satisfies` keyword to eliminate the need for checking if `name` is null.
type Product = {
  id: number;
  name: string | null;
};

// Declared this way, the type is wider than need be because the id field can be null
const product: Product = {
  id: 1,
  name: "Product 1",
};

// Must check name before calling toUpperCase because `name` can be null.
if (product.name) {
  product.name.toUpperCase();
}

// Question 2: Given the code below, use the `satisfies` keyword to assure the switch statement exhaustive.
interface Dog {
  kind: "dog";
  breed: string;
}

interface Cat {
  kind: "cat";
  color: string;
}

interface Bird {
  kind: "bird";
  wingspan: number;
}

type Pet = Dog | Cat | Bird;

function describePet(pet: Pet) {
  switch (pet.kind) {
    case "dog":
      return `A ${pet.breed} dog.`;
    case "cat":
      return `A ${pet.color} cat.`;
  }
}

// Question 3: Eliminate the need for typeof checks below using `satisfies` keyword to narrow the `vehicle` type.
type VehicleKey = "make" | "model" | "year";

const vehicle: Record<VehicleKey, string | number> = {
  year: 2021,
  make: "Toyota",
  model: "Camry",
};

if (typeof vehicle.make === "string") {
  console.log(vehicle.make.toUpperCase());
}

if (typeof vehicle.year === "number") {
  console.log(vehicle.year.toFixed());
}
