// Arktype (Zod alternative)
import { type } from "arktype";

const userType = type({
  username: "string",
  email: "string.email",
});

const result = userType({
  name: "John Doe",
  age: 42,
});

if (result instanceof type.errors) {
  console.log(result.summary);
} else {
  // result is now of type User
  console.log(result);
  console.log("success");
}
