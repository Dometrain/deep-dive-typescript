import * as z from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// Throws an error if the object passed doesn't match the schema
const user = userSchema.parse({
  name: "John Doe",
  age: 42,
});

type User = z.infer<typeof userSchema>; // Infer the type from the schema
