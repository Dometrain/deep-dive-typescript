// Omit
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutAge = Omit<User, "age">;
