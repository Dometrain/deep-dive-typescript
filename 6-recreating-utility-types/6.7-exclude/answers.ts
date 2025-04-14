// Exercise: Create a type called MyExclude that accepts a union type and returns a new union type that excludes specified members.
// It will accept two generic type arguments:
// 1. `T` - Target union type
// 2. `U` - One or more items in `T` to exclude

// read `extends` as "if" in the context of conditional types.
// Read as "If U is in T, exclude it".
type MyExclude<T, U> = T extends U ? never : T;

// test
type VehicleType = "new" | "used" | "certified";
type NewOrUsed = MyExclude<VehicleType, "certified">; // "new" | "used"
