// Type only import avoids circular dependencies
import type { A } from "./a";

export interface B {
  id: number;
  related: A;
}
