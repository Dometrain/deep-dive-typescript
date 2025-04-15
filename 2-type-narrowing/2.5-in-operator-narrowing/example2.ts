// type narrowing via `in` operator - safely check if a property exists.
type Car = { numDoors: number };
type Motorcycle = { hasWindshield: boolean };

function logVehicle(vehicle: Car | Motorcycle) {
  // if (vehicle.numDoors) {   // This doesn't work
  if ("numDoors" in vehicle) {
    console.log(`Car has ${vehicle.numDoors} doors`);
  } else {
    console.log(`Motorcycle has windshield: ${vehicle.hasWindshield}`);
  }
}
