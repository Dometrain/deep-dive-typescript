// Return string
function prefixValue1(value: string) {
  return `prefix-${value}`;
}

// Return template literal type
function prefixValue2<T extends string>(value: T): `prefix-${T}` {
  return `prefix-${value}`;
}

const result1 = prefixValue1("example"); // Type is "string"
const result2 = prefixValue2("example"); // Type is "prefix-example"
