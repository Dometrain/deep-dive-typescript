// Can move generic argument "up" to the interface,
// so that it doesn't need to be repeated in the function signature.
// This is useful when you want to use the same type for multiple
// parameters in the function signature.
interface GenericFirstElementFn<Type> {
  (arg: Type): Type; // Now this is a non-generic func signature that's a part of a generic type
}

function firstElement<T>(arg: T): T {
  return arg;
}

// Now must specify the type when creating the function type variable.
// This is because the generic type parameter "Type" is now part of the interface, not the function signature.
let myFirstElement: GenericFirstElementFn<number> = firstElement;
