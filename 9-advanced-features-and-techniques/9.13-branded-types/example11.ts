import * as z from "zod";

const currencySchema = z.number().positive(); // Can be highly specific in our validation
const usDollarSchema = currencySchema.brand<"usDollar">();
const euroSchema = currencySchema.brand<"euro">();

type UsDollar = z.infer<typeof usDollarSchema>;
type Euro = z.infer<typeof euroSchema>;

function payEuropeanTaxes(amount: Euro): void {
  console.log(`Paying ${amount} in Euro`);
}

// Zod safely parses the number to a branded type. No type assertion needed.
const euros: Euro = euroSchema.parse(100);
const dollars: UsDollar = usDollarSchema.parse(100);

payEuropeanTaxes(euros); // OK
// payEuropeanTaxes(dollars); // Error: Argument of type 'UsDollar' is not assignable to parameter of type 'Euro'

// To see this work:  tsc example12.ts --target es2022 --moduleResolution nodenext --module nodenext
// Need to include these configs since tsconfig is ignored when a single file is compiled.
