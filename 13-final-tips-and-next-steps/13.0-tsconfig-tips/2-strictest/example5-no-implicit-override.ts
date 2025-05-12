class Vehicle {
  setup() {}
}

class Car extends Vehicle {
  override setup() {} // Works. Explicit override
}

class Truck extends Vehicle {
  // @ts-expect-error
  setup() {} // Error: Implicit override
}
