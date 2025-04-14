// Using mapped type to derive EmployeePermissions

type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

type EmployeePermissions = {
  [Property in keyof EmployeeConfig as `change${Capitalize<Property>}`]: boolean;
};
