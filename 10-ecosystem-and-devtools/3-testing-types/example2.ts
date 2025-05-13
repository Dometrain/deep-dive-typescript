import { Expect, Equal } from "./example1";

// Let's test this
type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

type Person = {
  name: string;
  address: {
    country: string;
  };
};

type testCases = [
  Expect<
    Equal<
      RecursivePartial<Person>,
      {
        name?: string;
        address?: {
          country?: string;
        };
      }
    >
  >,
];
