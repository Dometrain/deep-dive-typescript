// A type param can be constrained by another type param
// Here, K must be a property of T)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// or
function getProperty2<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
): ObjectType[KeyType] {
  return obj[key];
}

// Usage
const person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // Returns "Alice"
const age = getProperty(person, "age"); // Returns 25
