// Exercise 1: Basic usage of Partial
// Question: Given the following interface, use the Partial utility type to create a `PartialHouse` type where all properties are optional.

interface House {
  id: number;
  address: string;
  price: number;
}

type PartialHouse = Partial<House>;

// Exercise 2: Function with Partial type
// Question: Write a function `updateHouse` that takes a `House` and a
// `PartialHouse`, and returns a new `House` object that merges the two via object spread.

function updateHouse(house: House, updates: PartialHouse): House {
  return { ...house, ...updates };
}

const house: House = { id: 1, address: "123 Main St", price: 250000 };
const houseUpdates: Partial<House> = { price: 275000 };
const updatedHouse = updateHouse(house, houseUpdates);
console.log(updatedHouse); // { id: 1, address: '123 Main St', price: 275000 }

// Exercise 3: Using Partial with a class
// Question: Given the class `Apartment` below, write a function `updateApartment`
// that takes an `Apartment` object and a `Partial<Apartment>` object,
// and returns a new `Apartment` object with the updates applied.

class Apartment {
  constructor(
    public id: number,
    public unitNumber: string,
    public rent: number
  ) {}
}

function updateApartment(
  apartment: Apartment,
  updates: Partial<Apartment>
): Apartment {
  return { ...apartment, ...updates };
}

const apartment = new Apartment(1, "A101", 1500);
const apartmentUpdates: Partial<Apartment> = { rent: 1600 };
const updatedApartment = updateApartment(apartment, apartmentUpdates);
console.log(updatedApartment); // Apartment { id: 1, unitNumber: 'A101', rent: 1600 }
