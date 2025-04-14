// Plain JS feature: Can use indexed access on an object to get a property's value
const car = {
  make: "Toyota",
  model: "Corolla",
};

// Equivalent
const model = car.model;
const model2 = car["model"];

console.log(model); // "Corolla"
console.log(model2); // "Corolla"
