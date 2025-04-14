// Narrowing an object type
function isUser(value: any): value is { name: string } {
  return value && typeof value.name === "string";
}
