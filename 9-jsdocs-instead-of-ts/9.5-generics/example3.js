// Default type parameter

/** @template [T=object] */
class Customer {
  /** @param {T} initial */
  constructor(initial) {}
}

// Without the comments above, there is no generic type for T
// Hovering over `customer` will show that it is of type `Customer`
let customer = new Customer({ name: "John Doe" });
