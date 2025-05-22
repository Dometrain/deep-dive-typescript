// Why mapped types?
// Create a new type from an existing type with our own logic.

// Sure, I could copy/paste like this...
type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

// Then manually change it to this...
type EmployeePermissions = {
  changeEmail: boolean;
  changeAge: boolean;
  changeRole: boolean;
};
