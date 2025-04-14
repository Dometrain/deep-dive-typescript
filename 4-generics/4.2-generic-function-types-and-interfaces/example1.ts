function firstElement<T>(arg: T): T {
  return arg;
}

// Function type, with a generic type parameter.
// Note that different identifiers can be used, but signature must be compatible.
let myFirstElement: <Type>(arg: Type) => Type = firstElement;
