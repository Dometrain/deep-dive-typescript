import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof userSchema>; // Infer type from schema

const user: User = {
  name: "John",
  age: 30,
};
