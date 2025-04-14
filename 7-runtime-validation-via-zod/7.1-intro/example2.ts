// Valibot (Zod alternative)

import * as v from "valibot";

const userSchema = v.object({
  name: v.string(),
  age: v.number(),
});

// This throws if the object passed doesn't match the schema
const user = v.parse(userSchema, {
  name: "John Doe",
  age: 42,
});
