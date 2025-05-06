// Exercise: Create a type utility called `RecursivePartial` that recursively marks all child object properties as optional.

// 1. Iterate over each property in T
// 2. Make each property optional.
// 3. If the property is an object, call RecursivePartial (recursion).
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
  emails: Email[];
  register: () => void;
  location: string;
};

type Email = {
  email: string;
  type: "work" | "personal";
};

// Can omit all properties
const person1: RecursivePartial<Person> = {};

// Nested address properties and properties on objects in email array are optional too.
const person: RecursivePartial<Person> = {
  address: {},
  emails: [
    {
      email: "test@example.com",
    },
  ],
};
