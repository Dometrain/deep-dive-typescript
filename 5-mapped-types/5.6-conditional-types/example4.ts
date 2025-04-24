// Returning `never` in a conditional type omits the union member

type Extract<T, U> = T extends U ? T : never; // Copy of TypeScript's Extract utility type for reference

type Vehicle = "car" | "truck" | "bicycle";

// So "T extends U" in TypeScript's `Extract` loops 3 times, once for each union entry in `Vehicle`:
// 1. Is "car" assignable to "car" | "truck"? Yes, so keep it.
// 2. Is "truck" assignable to "car" | "truck"? Yes, so keep it.
// 3. Is "bicycle" assignable to "car" | "truck"? No, so discard it.
type MotorizedVehicle = Extract<Vehicle, "car" | "truck">; // "car" | "truck"
