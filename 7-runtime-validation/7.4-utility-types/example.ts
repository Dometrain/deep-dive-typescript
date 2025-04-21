// Derive new Utility type equivalents
import * as z from "zod";

const recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  ingredients: z.array(z.string()),
});

const justName = recipeSchema.pick({ name: true }); // Pick
const noId = recipeSchema.omit({ id: true }); // Omit
const partialRecipe = recipeSchema.partial(); // Partial
const requiredRecipe = recipeSchema.required(); // Required
