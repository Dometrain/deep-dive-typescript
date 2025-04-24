import type { Kilometer } from "./example4";

// Step 2: Use the branded type in a function signature
function convertKilometersToMeters(km: Kilometer): number {
  return km * 1000;
}

// Brand a number as Kilometer
const distanceInKm: Kilometer = 5 as Kilometer;
convertKilometersToMeters(distanceInKm); // OK

// convertKilometersToMeters(1); // Calling with a number fails
