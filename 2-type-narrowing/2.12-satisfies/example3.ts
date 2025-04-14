// Narrow down types in object literals
type Keys = "id" | "name" | "email";

const person = {
  id: 1,
  name: "Cory",
  email: "c@example.com",
} satisfies Record<Keys, string | number>;

person.name.toUpperCase();
person.id.toFixed();
