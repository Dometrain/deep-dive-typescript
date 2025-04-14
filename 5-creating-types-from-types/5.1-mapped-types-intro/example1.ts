// Why do we need mapped types?

type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

type EmployeePermissions = {
  changeEmail: boolean;
  changeAge: boolean;
  changeRole: boolean;
};
