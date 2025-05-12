// noUncheckedIndexedAccess - Ensure you check for undefined or null values when accessing array elements or object properties.

// Array example
const arr = ["a", "b"];
const thirdItem = arr[2];
thirdItem?.toUpperCase(); // Must check for undefined

// Object example
type User = {
  name: string;
  [key: string]: string; // Index signature
};

const user: User = { name: "Cory" };
const email = user["email"];
console.log(email?.length); // Must check for undefined
