// Exercise: Create a type utility called `RecursivePartial` that recursively marks all child object properties as optional.

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

type Person = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  location: string;
};

type PartialPersonWithNested = RecursivePartial<Person>;

// Nested address properties are optional too.
const person: PartialPersonWithNested = {
  name: "John Doe",
  address: {
    city: "New York",
  },
};
