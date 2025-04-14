// Exercise: Create a utility type called `MyExtract` that extracts from T the types that are assignable to U
// Tip: Accept two generic arguments:
// 1. `T` - The target type
// 2. `U` - The union of items to extract from the target

// Test
// type Vehicle = "car" | "truck" | "bike";
// type MotorizedVehicle = MyExtract<Vehicle, "car" | "truck">; // "car" | "truck"
