# Summary

This table summarizes the built-in utility types in TypeScript. It includes the name of the utility type, a brief description, and an example of its usage. It groups related utility types together for better organization and understanding.
| Utility Type | Description | Example |
|---------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| `Partial<T>` | Constructs a type with all properties of T set to optional. | `type PartialUser = Partial<User>;` |
| `Required<T>` | Constructs a type with all properties of T set to required. | `type RequiredUser = Required<PartialUser>;` |
| `Readonly<T>` | Constructs a type with all properties of T set to readonly. | `type ReadonlyUser = Readonly<User>;` |
| `Record<K, T>` | Constructs an object type whose property keys are K and property values are T. | `type UserRecord = Record<string, User>;` |
| `Pick<T, K>` | Constructs a type by picking the set of properties K from T. | `type UserName = Pick<User, 'name'>;` |
| `Omit<T, K>` | Constructs a type by omitting the set of properties K from T. | `type UserWithoutEmail = Omit<User, 'email'>;` |
| `Exclude<T, U>` | Constructs a type by excluding from T all union types that are assignable to U. | `type NonString = Exclude<string | number | boolean, string>;` |
| `Extract<T, U>` | Constructs a type by extracting from T all union types that are assignable to U. | `type StringOrNumber = Extract<string | number | boolean, string | number>;` |
| `NonNullable<T>` | Constructs a type by excluding null and undefined from T. | `type NonNullString = NonNullable<string | null | undefined>;` |
| `ReturnType<T>` | Constructs a type consisting of the return type of function T. | `type UserFunctionReturn = ReturnType<typeof getUser>;` |
| `InstanceType<T>` | Constructs a type consisting of the instance type of constructor function T. | `type UserInstance = InstanceType<typeof User>;` |
