// Can write generic type as a call signature of an object literal type too.
function firstElement<T>(arg: T): T {
  return arg;
}

let myFirstElement: { <Type>(arg: Type): Type } = firstElement;
