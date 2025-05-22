// Use refine to add custom validation logic and messages
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().refine((val) => val.length <= 255, {
    message: "String can't be more than 255 characters",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms",
  }),
});
