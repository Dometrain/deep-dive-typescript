function processValue<T extends string>(value: T): `prefix-${T}` {
  return `prefix-${value}`;
}

const result = processValue("example"); // Type is "prefix-example"
