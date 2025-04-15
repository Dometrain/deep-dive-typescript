type Vehicle = "car" | "truck" | "motorcycle" | "bicycle";

type MotorizedVehicle = Extract<
  Vehicle,
  "car" | "truck" | "motorcycle" | "bus"
>; // "car" | "truck" | "motorcycle"
