# Other built-in utility types

We've now covered the utility types you're most likely to use often, and the ones that I think are complex enough to warrant an exercise.

For the sake of time, let's quickly look at examples of TypeScript's 10 other built-in utility types.

- NoInfer - Disables type inference
- InstanceType - Extracts a classes instance type
- ThisParameterType - Extracts the type of the `this` parameter of a function type
- OmitThisParameter - Omit the `this` parameter from a function type
- ThisType - Specifies the type of `this` in a function type
- NonNullable - Removes null and undefined from a union type
- ReturnType - Extracts the return type of a function type
- Awaited - Converts a promise type to its resolved type
- Parameters - Extracts the parameter types of a function type
- ConstructorParameters - Extracts the parameter types of a constructor function type

For the full list of built-in utility types, check out the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html).
