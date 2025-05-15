// Example: Name schema and inferred type the same
import { z } from "zod";

// Note: I prefer to name this userSchema to differentiate it.
export const User = z.object({
  id: z.string(),
  name: z.string(),
});

export type User = z.infer<typeof User>;
