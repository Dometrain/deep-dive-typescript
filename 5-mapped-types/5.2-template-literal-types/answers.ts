// Exercise: Template Literal Types in TypeScript

// Question 1:
// Create a type `PhoneNumber` that enforces a 10-digit phone number format
// like this: "123-456-7890".

type PhoneNumber = `${number}-${number}-${number}`;
const phoneNumber: PhoneNumber = "123-456-7890";

// Question 2:
// Create a type `Version` that is a template literal type combining
// the string literal "v" with a number and a dot, followed by another number.

type Version = `v${number}.${number}`;
const version: Version = "v1.0";

// Question 3:
// Create a type `Status` union that uses a template literal type
// to combine the string literal "order-" with either
// "pending", "shipped", or "delivered".

type Status = `order-${"pending" | "shipped" | "delivered"}`;
const status: Status = "order-pending"; // OK
