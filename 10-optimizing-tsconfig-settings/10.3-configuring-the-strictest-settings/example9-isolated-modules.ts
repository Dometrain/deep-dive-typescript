// Isolated modules.

// Rule 1: Must use a type export to re-export a type.
import { Book } from "./book";
export type { Book }; // Must use type keyword here

// Rule 2: Namespaces only allowed in modules (files using import/export)

// Rule 3: Can't reference ambient const enum
// Example, if this was in some other file, couldn't consume it:
declare const enum Brands {
  Apple = 0,
  Microsoft = 1,
}
