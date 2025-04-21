import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string(),
  phone: z.string().optional(),
  newsletter: z.boolean().optional(),
  age: z.number().min(0).max(150),
});

type ContactForm = z.infer<typeof contactFormSchema>; // Infer the type from the schema

const contactForm = {
  name: "John Doe",
  email: "test@example.com",
  message: "Hello, this is a test message.",
  phone: "123-456-7890",
  newsletter: true,
  age: 180,
};

// Validate the data against the schema
const contact = contactFormSchema.parse(contactForm);
console.log(contact);
