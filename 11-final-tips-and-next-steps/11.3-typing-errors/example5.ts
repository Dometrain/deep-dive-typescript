// Using custom errors?
// Declare a custom type predicate to safely narrow the error type.
type ApiError = { code: number; message: string };

// This checks if the unknown error is an ApiError
function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "number" &&
    "message" in error &&
    typeof error.message === "string"
  );
}

try {
  // ...
} catch (err) {
  if (isApiError(err)) {
    console.error(`API Error ${err.code}: ${err.message}`);
  } else {
    console.error("Unknown error", err);
  }
}
