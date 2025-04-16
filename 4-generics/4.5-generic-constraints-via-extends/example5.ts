// Generic constraints with class
class Mechanic {
  hasWrench: boolean = true;
}

class Vehicle {
  numWheels: number = 4;
}

class Car extends Vehicle {
  numWheels = 4;
  mechanic: Mechanic = new Mechanic();
}

class Motorcycle extends Vehicle {
  numWheels = 2;
}

// The generic type must be a class that extends Vehicle,
// with a constructor that takes no arguments.
function createInstance<V extends Vehicle>(c: new () => V): V {
  return new c();
}

createInstance(Car).numWheels;
// createInstance(Mechanic); // Error: 'Mechanic' is not assignable
