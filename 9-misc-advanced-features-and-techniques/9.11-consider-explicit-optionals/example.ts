// Consider explicit optionals

type UserWithOptionalEmail = {
  id: number;
  name: string;
  email?: string; // May forget to set this
};

type UserWithExplicitOptionalEmail = {
  id: number;
  name: string;
  email: string | null; // Can't forget to set this
};
