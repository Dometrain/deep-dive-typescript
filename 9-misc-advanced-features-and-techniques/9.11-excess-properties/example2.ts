// TS allows extra properties on function return types too.
type Car = {
  make: string;
  model: string;
};

type LogCar = (car: Car) => Car;

const logCar: LogCar = (car) => {
  console.log(car);
  return {
    ...car,
    extraProperty: "extra property", // Allowed
  };
};
