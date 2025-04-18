// Can use indexed access on types too.
// When used on a type, it gives us the property's *type*:

type Car = { make: string; model: string; year: number };
type ModelType = Car["model"]; // Get the `model` property's type

// Still get autocomplete, and type safety. Typo fails.
// type ModelType2 = Car["modl"];

// Can pass a union of properties to create a union of the types of multiple properties
type YearOrMakeType = Car["year" | "make"]; // string | number

// Can pass a named union too
type MakeModel = "make" | "model";
type MakeOrModelType = Car[MakeModel]; // string

// Use keyof to create a union of unique types in the target type
type AllTypesInCar = Car[keyof Car]; // string | number
