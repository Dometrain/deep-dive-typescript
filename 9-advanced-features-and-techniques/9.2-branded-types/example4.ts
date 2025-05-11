// Solution: Branded types. (aka opaque types or nominal types)

// Step 1:
// Declare branded type. Can technically use any unique property to brand,
// but brand or __brand are a common convention.
export type Kilometer = number & { __brand: "kilometer" };

// or, use a unique symbol to avoid potential collision with other libraries
declare const kilometerSymbol: unique symbol;
export type Kilometer2 = number & { [kilometerSymbol]: void };
