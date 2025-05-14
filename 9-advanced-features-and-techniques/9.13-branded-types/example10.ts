// ts-brand
import { Brand } from "ts-brand";

type Currency<T> = Brand<number, T>;
type UsDollar = Currency<"usd">;
type Euro = Currency<"euro">;

function payEuropeanTaxes(amount: Euro): void {
  console.log(`Paying ${amount} in Euro`);
}

const euros: Euro = 100 as Euro;
const dollars: UsDollar = 100 as UsDollar;
payEuropeanTaxes(euros); // OK
// payEuropeanTaxes(dollars); // Error: Argument of type 'UsDollar' is not assignable to parameter of type 'Euro'
