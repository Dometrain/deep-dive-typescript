// Exercise: Branded Types in TypeScript

// Question 1:
// Create a branded type for a UserId that is a string but cannot be confused with a regular string.

type UserId = string & { readonly brand: unique symbol };
// or
// type UserId = string & { __brand: unique symbol };
// or
// declare const userIdSymbol: unique symbol;
// type UserId = string & { [userIdSymbol]: void };

const createUserId = (id: string): UserId => id as UserId;

// Question 2:
// Uncomment the `User` type below, then write a function `getUserById` that accepts the `UserId` type created in question 1,
// and returns a user with the given userId. Set the user's `name` property to "John".
// Then, invoke the function with a UserId and log the result.

type User = {
  id: UserId;
  name: string;
};

const getUserById = (id: UserId): User => {
  return {
    id,
    name: "John",
  };
};

const userId: UserId = createUserId("12345");
const user = getUserById(userId);
console.log(user);

// Question 3:
// Create a branded type for a Meter that is a number but cannot be confused with a regular number.

type Meter = number & { readonly brand: unique symbol };

const createMeter = (value: number): Meter => value as Meter;

// Question 4:
// Write a function `convertMetersToCentimeters` that accepts a Meter and returns the equivalent value in centimeters, as a number.

const convertMetersToCentimeters = (value: Meter): number => {
  return value * 100;
};

const distance: Meter = createMeter(100);
const distanceInCm = convertMetersToCentimeters(distance);
console.log(distanceInCm);
