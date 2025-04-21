import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms",
  }),
});
