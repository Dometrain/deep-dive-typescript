// Type only import avoids circular dependencies
import type { B } from "./b";

export interface A {
  id: number;
  related: B;
}
