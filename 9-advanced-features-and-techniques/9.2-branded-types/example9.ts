// The property used for branding can be whatever you like.
// And can use a generic to make the branding more reusable.
type Currency<T> = number & { __currency: T };

type UsDollar = Currency<"usd">;
type Euro = Currency<"euro">;

function payUnitedStatesTaxes(amount: UsDollar): void {
  console.log(`Paying ${amount} in USD`);
}

function payEuropeanTaxes(amount: Euro): void {
  console.log(`Paying ${amount} in Euro`);
}

const euros: Euro = 100 as Euro;
const dollars: UsDollar = 100 as UsDollar;
payEuropeanTaxes(euros); // OK
// payEuropeanTaxes(dollars); // Error: Argument of type 'UsDollar' is not assignable to parameter of type 'Euro'
