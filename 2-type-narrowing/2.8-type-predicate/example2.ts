// More complex example with a union type
function isNumberOrString(value: any): value is number | string {
  return typeof value === "number" || typeof value === "string";
}
