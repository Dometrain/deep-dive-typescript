// Using custom errors?
// Declare a custom type guard to safely narrow the error type.
type ApiError = { code: number; message: string };

// This checks if the unknown error is an ApiError
function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as any).code === "number" &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

try {
  // ...
} catch (err: unknown) {
  if (isApiError(err)) {
    console.error(`API Error ${err.code}: ${err.message}`);
  } else {
    console.error("Unknown error", err);
  }
}
