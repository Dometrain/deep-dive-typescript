// `unique symbol` is a *type* that represents a unique and immutable primitive value.

declare const mySymbol: unique symbol;

// Used for type-level branding and ensuring uniqueness at the type level.
// Like JS symbols, each reference to a `unique symbol` implies a unique identity that’s tied to a given declaration.
// Unlike JS symbol, since it's a type, it doesn't exist at runtime.

// Can use in two ways:
// 1. As a type annotation for a variable, but it must be `declare const`.
declare const mySymbol2: unique symbol; // must use declare const.
// let mySymbol2: unique symbol = symbol(); // Error. Can't use let.

// 2. On a readonly static property of a class.
class MyClass {
  static readonly mySymbol: unique symbol = Symbol();
}

// How to choose between JS' `Symbol` and TS' `unique symbol`?
// Use Symbol("desc") when you need a runtime symbol, like property keys.
// Use `unique symbol` when you want a unique type for type safety, but you don't need a runtime value.
