// Exercise: Create a utility type called `MyExtract` that
// accepts a union type and returns a new union type that includes only the specified members.
// Accept two generic arguments:
// 1. `T` - The target type
// 2. `U` - The union of items to extract from the target

// 1. Accept a target type called `T`, and a union of keys in the type, called `U`.
// 2. Iterate over each member in `T` - if the member is in `U`, include it.
type MyExtract<T, U> = T extends U ? T : never;

// Test
type Vehicle = "car" | "truck" | "bike";
type MotorizedVehicle = MyExtract<Vehicle, "car" | "truck">; // "car" | "truck"
