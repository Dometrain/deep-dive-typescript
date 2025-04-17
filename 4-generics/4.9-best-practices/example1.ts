// Tip 1. Use descriptive names when necessary.
// Use plain `T` or `Type` when the meaning is clear,
// such as when there's only a single type argument.
function identity<T>(arg: T): T {
  return arg;
}

// Consider `T`, `U` or `Type1`, `Type2` when a more descriptive name doesn't exist.
function merge<Type1, Type2>(arg1: Type1, arg2: Type2): [Type1, Type2] {
  return [arg1, arg2];
}

// Consider a `Type` suffix when there are multiple type args
// and a descriptive name makes sense.
function getProperty2<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
): ObjectType[KeyType] {
  return obj[key];
}
