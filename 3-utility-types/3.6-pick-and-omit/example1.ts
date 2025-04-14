// Pick
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutAge = Pick<User, "id" | "name">;
