// Class types in Generics

class Mechanic {
  hasWrench: boolean = true;
}

class Driver {
  license: string = "Class A";
}

class Vehicle {
  numWheels: number = 4;
}

class Car extends Vehicle {
  numWheels = 4;
  driver: Driver = new Driver();
}

class Motorcycle extends Vehicle {
  numWheels = 2;
  mechanic: Mechanic = new Mechanic();
}

// The generic type must be a class that extends Vehicle, with a constructor that takes no arguments.
function createInstance<V extends Vehicle>(c: new () => V): V {
  return new c();
}

createInstance(Car).numWheels;
createInstance(Motorcycle).mechanic;
// createInstance(Driver); // Error: 'Driver' is not assignable to 'Vehicle'
