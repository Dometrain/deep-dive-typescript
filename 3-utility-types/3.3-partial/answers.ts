// Exercise 1: Basic usage of Partial
// Question: Given the following interface, use the Partial utility type to create a `PartialHouse` type where all properties are optional.

interface House {
  id: number;
  address: string;
  price: number;
}

// Exercise 2: Function with Partial type
// Question: Write a function `updateHouse` that takes a `House` object and a `PartialHouse` object, and returns a new `House` object that merges the two via object spread.

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
