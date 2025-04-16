// Distributive example 2:
// When conditional types act on a generic type, they become distributive
// So, when extending a union as a constraint, TypeScript loops over each union member

type Extract<T, U> = T extends U ? T : never; // Copy of TypeScript's Extract utility type - just here for reference

type Vehicle = "car" | "truck" | "motorcycle" | "bicycle";

// So "T extends U" in TypeScript's `Extract` loops 4 times, once for each union entry in `Vehicle`:
// 1. Is "car" assignable to "car" | "truck"? Yes, so keep it.
// 2. Is "truck" assignable to "car" | "truck"? Yes, so keep it.
// 3. Is "motorcycle" assignable to "car" | "truck"? No, so discard it.
// 4. Is "bicycle" assignable to "car" | "truck"? No, so discard it.
type MotorizedVehicle = Extract<Vehicle, "car" | "truck">; // "car" | "truck"
