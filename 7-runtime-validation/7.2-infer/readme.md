# Infer

After seeing a schema, you might think, this looks redundant. I don't want to have to declare a type and a Zod schema. Good news, you don't have to! Zod can infer a type from a schema.

Here's an example:

```ts
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof userSchema>;

const user: User = {
  name: "John",
  age: 30,
};
```

In this example, `User` is a TypeScript type. It's inferred from the `userSchema` Zod schema. You don't have to declare the type yourself. Zod infers it for you. And if the schema changes, the type changes too.

So, once you start using Zod, you declare fewer TypeScript types. Instead, you declare Zod schemas, and infer the types from them.
