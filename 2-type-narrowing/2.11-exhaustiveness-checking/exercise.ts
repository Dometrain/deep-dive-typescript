// Exercise: Exhaustiveness Checking in TypeScript

// Question 1:
// Given the switch below, use the `never` type to implement an exhaustiveness
// check to ensure all possible vehicles are handled.

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
  }
}
