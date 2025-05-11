// Use exhaustive checks for known error types

type AppError = "NotFound" | "Unauthorized" | "Timeout";

function handleError(err: AppError) {
  switch (err) {
    case "NotFound":
      // ...
      break;
    case "Unauthorized":
      // ...
      break;
    case "Timeout":
      // ...
      break;
    default:
      err satisfies never; // Error if a new AppError is added and not handled
  }
}
