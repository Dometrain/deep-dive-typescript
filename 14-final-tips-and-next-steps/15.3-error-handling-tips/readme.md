## Prefer unknown over any for error types

Prefer typing errors as `unknown`. In JavaScript, anything can be thrown, including objects, strings, numbers, and even functions. So, defaulting to `unknown` assure you handle the error properly before using it. This is a good practice because it prevents runtime errors that can occur when you try to access properties or methods on an object that doesn't exist.

```ts
try {
  // risky code
} catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error("Unknown error", e);
  }
}
```

## Consider modeling error states with union types

Instead of throwing, return union types explicitly:

```ts
type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function parseJSON(input: string): Result<any> {
  try {
    return { ok: true, value: JSON.parse(input) };
  } catch (e) {
    return { ok: false, error: "Invalid JSON" };
  }
}
```

## Don’t let null/undefined sneak in silently

Enable these in tsconfig.json:

```json
{
  "strictNullChecks": true,
  "noUncheckedIndexedAccess": true
}
```

## Validate external inputs at runtime

We used Zod, but can consider alternatives like ArkType, Valibot, io-ts, etc.

```ts
const schema = z.object({
  name: z.string(),
  age: z.number().min(0),
});

const result = schema.safeParse(input);
if (!result.success) {
  return { error: result.error.format() };
}
```

## Use custom error classes

```ts
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
```

## Use exhaustive checking for known error types

If you use custom error types or string literals, make sure you handle all cases:

```ts
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
      const _exhaustiveCheck: never = err;
      throw new Error(`Unhandled error: ${err}`);
  }
}
```
