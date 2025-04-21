// Assure env variables are set and have the correct type via Zod
import * as z from "zod";

const environmentSchema = z.object({
  VITE_ENVIRONMENT: z.enum(["development", "production"]),
  VITE_API_BASE_URL: z.string(),
  VITE_PORT: z.coerce.number().default(3000),
});

export const env = environmentSchema.parse(import.meta.env);

console.log("environment", env);
