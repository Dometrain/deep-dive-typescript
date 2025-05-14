import { expectTypeOf, test } from "vitest";

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

const partialPerson: RecursivePartial<Person> = {
  name: "Cory",
  address: {
    country: "USA",
  },
};

test("RecursivePartial should make all nested keys optional", () => {
  expectTypeOf(partialPerson).toExtend<{
    name?: string;
    address?: {
      country?: string;
    };
  }>();
});
