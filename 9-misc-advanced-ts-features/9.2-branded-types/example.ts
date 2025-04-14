// Step 1: Create branded type. Can technically use any unique property to brand, but brand or __brand are a common convention.
// type Kilometers = number & { __brand: "kilometers" };
// or
type Kilometer = number & { __brand: "kilometer" };
// or, use a unique symbol to avoid potential collision with other libraries
// declare const kilometersSymbol: unique symbol;
// type Kilometers = number & { [kilometersSymbol]: void };

// Step 2 (optional, but generally preferable to an inline type assertion): Create a type predicate that safely converts to branded type. Could contain validation logic too.
const toKilometers = (value: number): Kilometer => value as Kilometer;

// Step 3: Use the branded type in a function signature
const convertKilometersToMeters = (km: Kilometer): number => km * 1000;

// Calling with a number fails
// convertKilometersToMeters(1); // Error: Argument of type '1' is not assignable to parameter of type 'Kilometers' (if using symbol, or show __brand if using __brand)

// Brand a number as kilometers
const newYorkToLondonInKm = toKilometers(5567);
convertKilometersToMeters(newYorkToLondonInKm); // OK

// Prettify utility makes intersections more readable - Can use for Kilometers type above if preferred.
type Prettify<T> = {
  [K in keyof T]: Prettify<T[K]>;
} & {};
