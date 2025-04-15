// type narrowing via a type predicate
function isString(value: any): value is string {
  return typeof value === "string";
}
