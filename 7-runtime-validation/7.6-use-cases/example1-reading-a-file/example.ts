// Validate a file's content using Zod
import { z } from "zod";
import { readFileSync } from "fs";

const personSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
  email: z.string().email(),
});

const parsedJson = JSON.parse(readFileSync("./people.json", "utf-8"));
const people = personSchema.array().parse(parsedJson);
console.log("Parsed data:", people);
