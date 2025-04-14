// Using Partial with nested properties
type Person = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  location: string;
};

// Nested properties aren't optional. Note that city and country are still required.
type PartialPerson = Partial<Person>;

// So, can use a union type to make nested properties optional
type PartialAddress = Partial<Person["address"]>;
type PersonWithoutAddress = Omit<Person, "address">;
type PartialPersonWithOptionalNested = Partial<PersonWithoutAddress> & {
  address?: PartialAddress;
};

const partialPerson: PartialPersonWithOptionalNested = {
  name: "John Doe",
  address: {
    city: "New York",
  },
};
