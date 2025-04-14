// Exercise: Type Narrowing with Discriminated Unions

// Question 1:
// Define a discriminated union type `Vehicle` that can be either a `Car` or a `Truck`.
// Each vehicle should have a `type` property to discriminate between them.
// A `Car` should have a `numberOfDoors` property, and a `Truck` should have a `payloadCapacity` property.

type Vehicle =
  | { type: "car"; numberOfDoors: number }
  | { type: "truck"; payloadCapacity: number };

// Question 2:
// Write a function `describeVehicle` that takes a `Vehicle` and returns a description string.
// Use type narrowing via the discriminated union's `type` field to handle each vehicle type appropriately.

function describeVehicle(vehicle: Vehicle): string {
  switch (vehicle.type) {
    case "car":
      return `A car with ${vehicle.numberOfDoors} doors.`;
    case "truck":
      return `A truck with a payload capacity of ${vehicle.payloadCapacity} kg.`;
  }
}
