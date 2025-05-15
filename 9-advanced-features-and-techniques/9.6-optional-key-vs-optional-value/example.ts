// Consider "explicit optionals"

type UserWithOptionalKey = {
  id: number;
  email?: string; // May forget to set this
};

type UserWithOptionalValue = {
  id: number;
  email: string | null; // Can't forget to set this
};

const userWithOptionalKey: UserWithOptionalKey = {
  id: 1, // Did I forget to set email?
};

const userWithOptionalValue: UserWithOptionalValue = {
  id: 1,
  email: null, // Can't forget to set this. Must explicitly choose null.
};
