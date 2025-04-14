// Assure env variables are set and have the correct type via Zod
import { z } from "zod";

const environmentSchema = z.object({
  VITE_ENVIRONMENT: z.enum(["development", "production"]),
  VITE_PORT: z.coerce.number().default(3000),
});

export const environment = environmentSchema.parse(import.meta.env);

console.log("environment", environment);
