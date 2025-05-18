// Consider modeling error states with union types
// Instead of throwing, consider returning a union

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function parseJSON(input: string): Result<any> {
  try {
    return { ok: true, value: JSON.parse(input) };
  } catch (e) {
    return { ok: false, error: "Invalid JSON" };
  }
}
