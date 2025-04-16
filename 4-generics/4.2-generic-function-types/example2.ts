function firstElement<T>(array: T): T {
  return array[0];
}

// Function type, with a generic type parameter.
// Note that different identifiers can be used, but signature must be compatible.
let FirstElementFn: <Type>(arg: Type) => Type;

const myFirstElement = firstElement;
