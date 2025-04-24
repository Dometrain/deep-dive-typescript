// type narrowing via a type predicate
function isString(value: any): value is string {
  return typeof value === "string";
}

const value: any = "hello world";

if (isString(value)) {
  console.log(value.toUpperCase()); // value is a string
}
