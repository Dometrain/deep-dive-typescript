import { Kilometer } from "./example4";

// Step 4: (optional)
// Prettify utility makes intersections more readable.
type Prettify<T> = {
  [K in keyof T]: Prettify<T[K]>;
} & {};

type PrettifiedKilometer = Prettify<Kilometer>;
