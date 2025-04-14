# Declaring Zod Schemas

Zod isn't just special because it exists at runtime. It's also more powerful than TypeScript. You can declare things in Zod that you can't declare in TypeScript.

## Complex schema that TypeScript can't express

```ts

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string(),
  phone: z.string().optional(),
  terms: z.boolean().refine(value => value === true, {
    message: "You must accept the terms",
  }),
  newsletter: z.boolean().optional(),
  age: z.number().min(0).max(150).
```

In this example, we have a complex schema. It has many constraints. It's not just a type. It's a type with rules. TypeScript can't express this. But Zod can.

You can still derive a TypeScript type from this schema. But the schema is more powerful. It can enforce rules that TypeScript can't.

```ts
type ContactForm = z.infer<typeof contactFormSchema>;
```

Zod supports [all the primitives you'd expect](https://zod.dev/?id=primitives) and [enums](https://zod.dev/?id=zod-enums) too.

You can validate [literals](https://zod.dev/?id=literals), and [many specific types of strings](https://zod.dev/?id=strings), and [numbers](https://zod.dev/?id=numbers) that TS can't express.

Validation messages support an optional message too:

```ts
z.string().min(5, { message: "Must be 5 or more characters long" });
```
