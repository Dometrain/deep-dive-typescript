// Risk: Structural types mean you may accidentally pass the wrong type
type Car = { make: string };
type Truck = { make: string; bedLength: number };

const serviceCar = (car: Car) => {};
const truck: Truck = { make: "Ford", bedLength: 5 };
serviceCar(truck); // Works. Ideally would get a type error.
