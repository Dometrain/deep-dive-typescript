// Consider "explicit optionals"

type UserWithOptionalKey = {
  id: number;
  email?: string; // May forget to set this
};

type UserWithOptionalValue = {
  id: number;
  email: string | null; // Can't forget to set this
};
