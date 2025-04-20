// Exercise: Create a type called MyExclude that accepts a union type and returns a new union type that excludes specified members.
// It will accept two generic type arguments:
// 1. `T` - Target union type
// 2. `U` - One or more items in `T` to exclude

// 1. Accept a target type called `T`, and a union of keys in the type, called `U`.
// 2. Iterate over each member in `T` - if the member is in `U`, exclude it (via `never`).
// Remember: In conditional types, if T is a union, TS "distributes"
// (loops over) the condition across each member of that union.
type MyExclude<T, U> = T extends U ? never : T;

// test
type VehicleType = "new" | "used" | "certified";
type NewOrUsed = MyExclude<VehicleType, "certified">; // "new" | "used"
