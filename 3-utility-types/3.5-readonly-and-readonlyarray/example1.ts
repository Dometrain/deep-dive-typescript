type Person = {
  name: string;
  age: number;
};

const person: Readonly<Person> = {
  name: "John Doe",
  age: 30,
};

// person.age = 31; // Cannot assign to 'age' because it is a read-only property.
