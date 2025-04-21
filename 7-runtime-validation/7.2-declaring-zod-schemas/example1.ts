import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string(),
  phone: z.string().optional(),
  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms",
  }),
  newsletter: z.boolean().optional(),
  age: z.number().min(0).max(150),
});
