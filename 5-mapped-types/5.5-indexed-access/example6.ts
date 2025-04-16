function getKeyType<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Usage
const user = { name: "Alice", age: 30 };
const nameKeyType = getKeyType(user, "name"); // type is string
const ageKeyType = getKeyType(user, "age"); // type is number
