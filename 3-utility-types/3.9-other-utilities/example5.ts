// ThisType - Marker for a contextual `this` type
// Useful to specify `this` with object literals
// Avoids repeatedly specifying `this` in function signatures

type Logger = {
  logInfo: () => string;
  logError: () => string;
};

// ThisType avoids repeatedly specifying `this` in function signatures below
const logger: Logger & ThisType<{ message: string }> = {
  logInfo() {
    return `Info: ${this.message}`;
  },
  logError() {
    return `Error: ${this.message}`;
  },
};

// Implementation
const logEntry = {
  message: "System failure",
  ...logger,
};

console.log(logEntry.logInfo()); // Info: System failure
// console.log(double());
