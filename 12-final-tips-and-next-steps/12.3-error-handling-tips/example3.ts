// Warning: fetch's error is `any` by default.
// Consider using `unknown` instead.
fetch("https://example.com")
  .then((response) => {
    if (!response.ok) throw response.text;
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
