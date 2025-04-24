// Narrowing an object type with named type
function isUser(value: any): value is User {
  return value && typeof value.name === "string";
}

const user = { name: "John Doe" }; // No type annotation

if (isUser(user)) {
  console.log(user.name); // user is { name: string }
}

type User = {
  name: string;
};
