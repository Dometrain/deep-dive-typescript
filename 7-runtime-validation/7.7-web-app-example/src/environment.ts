// Assure env variables are set and have the correct type via Zod
import * as z from "zod";

const environmentSchema = z.object({
  VITE_ENVIRONMENT: z.enum(["development", "production"]),
  VITE_API_BASE_URL: z.string(),
  VITE_PORT: z.coerce.number().default(3000),
});

export const env = environmentSchema.parse(import.meta.env);

export function setupEnvironment(environmentContainer: HTMLDivElement) {
  environmentContainer.innerHTML = `
    <pre>${JSON.stringify(env, null, 2)}</pre>`;
  console.log("Environment Variables", env);
}
