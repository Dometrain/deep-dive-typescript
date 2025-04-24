// Summary, all 3 pieces

// 1. Branded type, prettified
export type Kilometer = number & { __brand: "kilometer" };

// 2. Type predicate
export function toKilometers(kilometers: number): Kilometer {
  assertKilometer(kilometers);
  return kilometers as Kilometer;
}

// 3. Assertion function
export function assertKilometer(value: number): asserts value is Kilometer {
  if (value < 0) throw new Error("Kilometer must be a positive number");
}
