// Narrowing an object type
function isUser(value: any): value is { name: string } {
  return value && typeof value.name === "string";
}

const user = { name: "John Doe" }; // No type annotation

if (isUser(user)) {
  console.log(user.name); // user is { name: string }
}
