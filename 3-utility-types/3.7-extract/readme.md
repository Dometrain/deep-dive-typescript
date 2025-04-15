# Extract utility type

The `Extract` utility type is used to extract a subset of properties from a union that are assignable to the provided union.

For example, if you have a union of vehicle types:

```ts
type Vehicle = "car" | "truck" | "motorcycle" | "bicycle";
```

You can use the `Extract` utility type to extract only the vehicle types that are assignable to a specific type:

```ts
type MotorizedVehicle = Extract<Vehicle, "car" | "truck" | "motorcycle">; // "car" | "truck" | "motorcycle"
```

And, if you try to exclude something that isn't in the union, it's ignored.

```ts
type Vehicle = "car" | "truck" | "motorcycle" | "bicycle";

type MotorizedVehicle = Extract<
  Vehicle,
  "car" | "truck" | "motorcycle" | "bus"
>; // "car" | "truck" | "motorcycle"
```

In this example, the `bus` type is ignored because it's not in the `Vehicle` union.
