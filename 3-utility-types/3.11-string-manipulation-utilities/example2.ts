function logWarning(message: Uppercase<string>) {
  console.warn(message);
}

// Compiles
logWarning("HELLO WORLD");

// Won't compile
// logWarning("hello world");
