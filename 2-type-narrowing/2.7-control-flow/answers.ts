// Question 1: Create a function `yellHi` that takes a parameter `name` of type `string | null`.
// If the `name` is not null, return a string that says "Hi" followed by the uppercase version of the `name`.
// If the `name` is null, return "Hi there".
function yellHi(name: string | null) {
  if (name !== null) {
    return `Hi ${name.toUpperCase()}`;
  }

  return "Hi there";
}
