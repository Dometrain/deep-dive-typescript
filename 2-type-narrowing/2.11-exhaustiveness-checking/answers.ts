// Exercise: Exhaustiveness Checking in TypeScript

// Question 1:
// Given the switch below, use the `never` type to implement an exhaustiveness check to ensure all possible vehicles are handled.

type Car = {
  kind: "car";
  numberOfDoors: number;
};

type Bike = {
  kind: "bike";
  hasPedals: boolean;
};

type Vehicle = Car | Bike;

function logDescription(vehicle: Vehicle): void {
  switch (vehicle.kind) {
    case "car":
      console.log(`Car with ${vehicle.numberOfDoors} doors`);
      break;
    case "bike":
      console.log(`Bike with pedals: ${vehicle.hasPedals}`);
      break;
    default:
      const _exhaustiveCheck: never = vehicle;
      return _exhaustiveCheck;
  }
}

// Question 2:
// Given the switch below, specify an explicit return type
// to ensure all possible vehicles are handled.
// After adding the explicit return type, ensure TypeScript
// catches the error when a case is removed.

function getDescription(vehicle: Vehicle): string {
  switch (vehicle.kind) {
    case "car":
      return `Car with ${vehicle.numberOfDoors} doors`;
    case "bike":
      return `Bike with pedals: ${vehicle.hasPedals}`;
  }
}
