import * as z from "zod";

const schema = z.object({
  name: z.nullable(z.string()),
  age: z.optional(z.number()),
});

const data = {
  name: null, // omitted optional age, and set name to null
};

const result = schema.parse(data); // success
