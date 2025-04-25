// Exercise 1: Create a recursive `DeepReadonly` type to make all a type's properties readonly

// Example type with nested properties
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const user: DeepReadonly<User> = {
  name: "John Doe",
  address: {
    city: "New York",
    country: "USA",
  },
};

// @ts-expect-error
user.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property
user.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property

// Exercise 2: Create a recursive type to extract all keys from a nested object
type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: K | NestedKeys<T[K]>;
    }[keyof T]
  : never;

type UserKeys = NestedKeys<User>; // "address" | "name" | "city" | "country"
