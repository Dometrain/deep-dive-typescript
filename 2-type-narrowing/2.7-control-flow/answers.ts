// Question 1: Create a function `yellHi` that takes a parameter `name` of type `string | null`.
// If the `name` is not null, return a string that says "Hi" followed by the uppercase version of the `name`.
// If the `name` is null, return "Hi there".
function yellHi(name: string | null) {
  if (name !== null) {
    return `Hi ${name.toUpperCase()}`;
  }

  return "Hi there";
}

// Question 2: Create a function `processValue` that takes an optional parameter `value` of type `number`.
// If the `value` is provided, log the number value to the console with two decimal places via toFixed(2).
// If the `value` is not provided, log "No value" to the console.
function processValue(value?: number) {
  if (value) {
    console.log(`Number value: ${value.toFixed(2)}`);
  } else {
    console.log("No value provided");
  }
}
