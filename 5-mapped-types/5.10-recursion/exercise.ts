// Exercise 1: Create a recursive `DeepReadonly` type to make all a type's properties readonly

// Example type with nested properties
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

// type ReadonlyUser = DeepReadonly<User>; // Should be { readonly name: string; readonly address: { readonly city: string; readonly country: string; }; }

// Exercise 2: Create a recursive type to extract all keys from a nested object
type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: K | NestedKeys<T[K]>;
    }[keyof T]
  : never;

type UserKeys = NestedKeys<User>; // "address" | "name" | "city" | "country"
