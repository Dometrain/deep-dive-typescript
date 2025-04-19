interface Vehicle {
  manufactureDate: any;
}

interface Car extends Vehicle {
  model: string;
}

class Garage {
  vehicles: Vehicle[];
  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;
  }
}

class CarGarage extends Garage {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare vehicles: Vehicle[];
  constructor(cars: Car[]) {
    super(cars);
  }
}
