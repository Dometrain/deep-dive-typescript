// Regular import (may include the module in runtime bundle)
// import { Address } from "../1-example/address";

import { type Address } from "../1-example/address"; // Type-only import (no runtime dependency on address module)

// Usage
const address: Address = {
  city: "New York",
  country: "USA",
};
