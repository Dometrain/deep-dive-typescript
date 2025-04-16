// Can write generic type as an interface too.
interface GenericFirstElementFn {
  <Type>(arg: Type): Type;
}

function firstElement<T>(arg: T): T {
  return arg;
}

let myFirstElement: GenericFirstElementFn = firstElement;

// or as a type alias
type GenericFirstElementFnType = <Type>(arg: Type) => Type;
let myFirstElement2: GenericFirstElementFnType = firstElement;
