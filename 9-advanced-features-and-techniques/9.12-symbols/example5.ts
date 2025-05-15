// TS uses symbols for internal language behaviors:

// Metadata
Symbol.isConcatSpreadable; // Bool that indicates if an object should be flattened to its array elements by Array.prototype.concat
Symbol.unscopables; // Object that defines properties that are excluded from with bindings

// Methods
Symbol.asyncIterator; // Returns an AsyncIterator object
Symbol.hasInstance; // Determines if a constructor object recognizes an object as its instance
Symbol.iterator; // Returns an iterator for an object
Symbol.match; // Matches a string against a regular expression
Symbol.replace; // Replaces matched substrings of a string
Symbol.search; // Returns the index of the first match of a string against a regex
Symbol.split; // Splits a string into an array of substrings
Symbol.toPrimitive; // Converts an object to a primitive value
Symbol.toStringTag; // Returns the default description of an object
