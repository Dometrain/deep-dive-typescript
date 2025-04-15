// Partial utility type
type Person = {
  name: string;
  age: number;
  location: string;
};

type PartialPerson = Partial<Person>;
