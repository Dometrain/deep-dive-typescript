// TS supports treating symbols as unique literals via `unique symbol`, a subtype of `symbol`.
// Each reference to a `unique symbol` implies a unique identity that’s tied to a given declaration.

// Can use in two ways:
// 1. As a type annotation for a variable, but it must be `declare const`.
declare const mySymbol: unique symbol; // must use declare const.
// let mySymbol2: unique symbol = symbol(); // Error. Can't use let.

// 2. On a readonly static property of a class.
class MyClass {
  static readonly mySymbol: unique symbol = Symbol();
}
