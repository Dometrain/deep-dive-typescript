// type predicate with a union type
function isNumberOrString(value: any): value is number | string {
  return typeof value === "number" || typeof value === "string";
}

const value: any = 42;

if (isNumberOrString(value)) {
  console.log(value); // value is string | number
}
