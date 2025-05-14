import { Expect, Equal } from "./example2";

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

type testCase1 = Expect<
  Equal<
    RecursivePartial<Person>,
    {
      name?: string;
      address?: {
        country?: string;
      };
    }
  >
>;
