// Note return type - Must return the same type as the input
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // This isn't valid, because it's not necessarily the same type
    // (Remove the return type and this would work, but the return type would be inconsistent)
    // @ts-expect-error
    return { length: minimum };
  }
}
