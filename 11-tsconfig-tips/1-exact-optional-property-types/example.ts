// Exact optional property types example

interface Vehicle {
  manufactureDate?: Date;
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
  declare vehicles: Car[];
  constructor(cars: Car[]) {
    super(cars);
  }
}
