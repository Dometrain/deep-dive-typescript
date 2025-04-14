# tsignore Comments

TypeScript provides a built-in comment, `ts-ignore`, that can be used to suppress errors or disable type checking. This comment can be used to quickly silence errors, but it's generally better to fix the errors.

```typescript
// @ts-ignore
const num: number = "string";
```

So how does this differ from `ts-expect-error`? `ts-expect-error` will throw if the error is not present. So if you always expect the error to occur, use `ts-expect-error`. If you want to suppress an error that may occur, use `ts-ignore`.

| Comment Type       | Suppresses Errors? | Fails If No Error? | Use Case                                                      |
| ------------------ | ------------------ | ------------------ | ------------------------------------------------------------- |
| `@ts-ignore`       | ✅ Yes             | ❌ No              | Silence all errors (use with caution)                         |
| `@ts-expect-error` | ✅ Yes             | ✅ Yes             | Suppress known error and ensure it doesn't disappear silently |
