// Another example of when type arguments are required:
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Can omit when all the same type:
const result1 = combine([1, 2], [3, 4]); // inferred to be number[]

// Can omit when a mixed array is already specified:
const result3 = combine([1, 2], [3, "4"]);

// Required with mismatched types:
const result2 = combine<string | number>([1, 2], ["3"]);
