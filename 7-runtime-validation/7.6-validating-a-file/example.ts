// Validate a file's content using Zod
import * as z from "zod";
import { readFileSync } from "fs";

const personSchema = z.object({
  name: z.string(),
  age: z.number().gt(0).lt(120),
  email: z.email(),
});

type Person = z.infer<typeof personSchema>;

const parsedJson = JSON.parse(readFileSync("./people.json", "utf-8"));
const people = personSchema.array().parse(parsedJson);
console.log("Parsed data:", people);
