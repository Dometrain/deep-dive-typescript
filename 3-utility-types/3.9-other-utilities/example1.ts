// NoInfer - Prevent TypeScript from inferring a type.
// Useful if inference leads to a less desirable type, such as a wider type.

// Example usage of NoInfer utility type
function createCarModel<T extends string>(
  models: T[],
  defaultModel?: NoInfer<T> // without NoInfer, TypeScript would infer the type of defaultModel as string
) {
  // ...
}
createCarModel(["sedan", "suv", "truck"], "sedan"); // OK
// createCarModel(["sedan", "suv", "truck"], "motorcycle"); // Error
