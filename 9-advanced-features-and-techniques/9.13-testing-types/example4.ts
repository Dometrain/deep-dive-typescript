import { Expect, Equal } from "type-testing";

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

type testCase = Expect<
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

// Or, can declare multiple test cases in an array

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

// Includes
// Equal
// NotEqual
// Expect
// ExpectFalse
// Extends
// IsAny
// IsNever
// IsTuple
// IsUnion
// IsUnknown
// SimpleEqual
// TrueCases
// FalseCases
