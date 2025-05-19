// Since a JS error can be anything, TS types errors as `unknown`.
try {
  // risky code
  // e is `unknown`
} catch (e) {
  // Safely narrow via `instanceof`
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error("Unknown error", e);
  }
}
