// Exercise: Template Literal Types in TypeScript

// Question 1:
// Create a type `UserId` that is a template literal type combining the string literal "user-" with a number.

type UserId = `user-${number}`;

// Question 2:
// Create a type `Version` that is a template literal type combining the string literal "v" with a number and a dot, followed by another number.

type Version = `v${number}.${number}`;

// Question 3:
// Create a type `OrderStatus` that is a template literal type combining the string literal "order-" with either "pending", "shipped", or "delivered".

type OrderStatus = `order-${"pending" | "shipped" | "delivered"}`;
