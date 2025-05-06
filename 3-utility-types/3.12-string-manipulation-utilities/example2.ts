// String Manipulation Utilities are type safe and will throw compile-time errors if the wrong type is used.
function logWarning(message: Uppercase<string>) {
  console.warn(message);
}

logWarning("HELLO WORLD"); // Ok
// logWarning("hello world"); // Won't compile

// Note: Unlike other utilities, we can't see how they operate.
// These utilities are implemented using the `intrinsic` keyword,
// which means the type is built into the TypeScript compiler.
