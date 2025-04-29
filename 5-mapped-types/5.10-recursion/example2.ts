// Example: Recursive type that creates a union all keys from a nested object

// Type with nested properties
type Person = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

type AllKeys<T> = T extends object
  ? {
      [K in keyof T]: K | AllKeys<T[K]>; // Union of key and nested keys
    } // Extract union of all values in the mapped type
  : never;

type PersonKeys = AllKeys<Person>; // "name" | "address" | "city" | "country"
