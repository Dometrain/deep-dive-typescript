import type { Address } from "../1-example/address"; // Type-only import guarantees no runtime dependency

// Usage
const address: Address = {
  city: "New York",
  country: "USA",
};

console.log(address);
