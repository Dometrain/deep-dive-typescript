// Form interface that keeps values and error keys in sync, but defaults to an empty object if type is not specified
interface FormValues<T = {}> {
  values: T;
  errors?: Partial<Record<keyof T, string>>;
}

// Generic form (defaults to `{}`)
const genericForm: FormValues = { values: {} };
genericForm.errors = { name: "Name is required" }; // accepts any key

// Typed form
const userForm: FormValues<{ name: string; age: number }> = {
  values: { name: "Alice", age: 30 },
  errors: { name: "Name is required" }, // only name and age are accepted
};
