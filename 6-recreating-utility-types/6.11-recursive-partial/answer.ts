// Exercise: Create a type utility called `RecursivePartial` that recursively marks all child object properties as optional.

// 1. Iterate over each property in T
// 2. Make each property optional.
// 3. If the property is an object, recursively call RecursivePartial.
// 4. Keep the type of the property the same.
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

type PartialPerson = RecursivePartial<Person>;

// Nested address properties are optional too.
const person: PartialPerson = {
  name: "John Doe",
  address: {
    city: "New York",
  },
};
