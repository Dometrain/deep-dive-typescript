import type { Kilometer } from "./example4";

// Step 3: (optional, but safer) - Use type predicate and an assertion function to validate at runtime

// Type predicate to convert a number to Kilometer
function toKilometers(kilometers: number): Kilometer {
  assertKilometer(kilometers);
  return kilometers as Kilometer;
}

// Assertion function to validate the value at runtime
function assertKilometer(value: number): asserts value is Kilometer {
  if (value < 0) throw new Error("Kilometer must be a positive number");
}

// Assures all values are in Kilometers, not a mix of different units
function addDistancesInKm(a: Kilometer, b: Kilometer): Kilometer {
  return (a + b) as Kilometer;
}

const coryCommute = toKilometers(14);
const sallyCommute = toKilometers(9);
// const invalidCommute = toKilometer(-1); // error, -1 is not a valid Kilometer

addDistancesInKm(coryCommute, sallyCommute); // OK, and
// addDistances(1, 2); // error, 1 is a number instead of type Kilometer
