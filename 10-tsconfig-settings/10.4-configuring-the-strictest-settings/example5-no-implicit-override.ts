class Vehicle {
  setup() {}
}

class Car extends Vehicle {
  override setup() {} // Works. Explicit override
}

class Truck extends Vehicle {
  // setup() {} // Error: Implicit override
}
