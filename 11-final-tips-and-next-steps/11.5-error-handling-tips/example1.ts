// In JS, an error can be anything, so, prefer typing errors as `unknown`.
try {
  // risky code
} catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error("Unknown error", e);
  }
}

// When using fetch, the error is typed as `any` by default.
// Consider using `unknown` instead.
fetch("https://example.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  // Type as unknown to require handling safely below
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Unknown error", error);
    }
  });
