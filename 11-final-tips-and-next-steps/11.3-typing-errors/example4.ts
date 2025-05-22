// Consider declaring custom error classes that extend the built-in
// Error class to provide more context and type safety.

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// Now can easily handle a ValidationError differently
function handleErrors(e: unknown) {
  if (e instanceof ValidationError) {
    // handle specific case
  } else if (e instanceof Error) {
    // handle generic error
  } else {
    // handle unknown error
  }
}
