// Valid, and `logAddress` import is NOT erased since it's not a type.
import { logAddress, type Address } from "./address";

// Favor type *outside* the braces if only importing types, since the import completely erases.
// import type { Address } from "./address";

// This works too, but the import isn't fully erased when verbatimModuleSyntax is true.
// import { type Address } from "./address";

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

logAddress(user.address); // Address: New York, USA
