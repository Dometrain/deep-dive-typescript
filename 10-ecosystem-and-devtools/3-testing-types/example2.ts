import { Expect, Equal } from "./example1";

// Let's test this utility type
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
};

type testCases = [
  Expect<
    Equal<
      RecursivePartial<Person>,
      {
        name?: string;
        age?: number;
        address?: {
          city?: string;
          country?: string;
        };
      }
    >
  >,
];
