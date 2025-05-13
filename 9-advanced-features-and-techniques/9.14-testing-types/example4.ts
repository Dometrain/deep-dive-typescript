import { expectTypeOf } from "expect-type";

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

expectTypeOf(partialPerson).toEqualTypeOf<{
  name?: string;
  address?: {
    country?: string;
  };
}>();
