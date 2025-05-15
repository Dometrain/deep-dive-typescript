// Type only import
import { type Address } from "./address";

// Can place type *outside* the braces if only importing types
// import type { Address } from "./address";

// Can mix type and traditional imports
// `logAddress` import is NOT erased since it's not a type.
// import { logAddress, type Address } from "./address";

// Invalid. `logAddress` isn't a type
// import type { logAddress, Address } from "./address";

// Import merely to preserve side effect.
// import "./address";

type User = {
  id: number;
  address: Address;
};

const user: User = {
  id: 1,
  address: {
    city: "New York",
    country: "USA",
  },
};

// logAddress(user.address);
