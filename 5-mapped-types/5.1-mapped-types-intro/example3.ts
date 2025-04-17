// Derive EmployeePermissions via a mapped type.

type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

type EmployeePermissions = {
  [Property in keyof EmployeeConfig as `change${Capitalize<Property>}`]: boolean;
};
