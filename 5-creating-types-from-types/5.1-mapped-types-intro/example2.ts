// Why mapped types? Create a new type from an existing type with our own custom logic.

// Sure, I could copy/paste like this...
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
