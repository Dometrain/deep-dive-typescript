// Consider declaring custom error classes

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Bad input");
} catch (e: unknown) {
  if (e instanceof ValidationError) {
    // handle specific case
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
