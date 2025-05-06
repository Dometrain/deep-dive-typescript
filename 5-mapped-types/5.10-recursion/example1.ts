// Example: Utility type that makes all properties (including nested properties) optional:

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// Type with nested properties
type Person = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

type PartialPerson = DeepPartial<Person>;
const person: DeepPartial<Person> = {}; // valid
const person2: DeepPartial<Person> = { address: { city: "New York" } }; // valid
