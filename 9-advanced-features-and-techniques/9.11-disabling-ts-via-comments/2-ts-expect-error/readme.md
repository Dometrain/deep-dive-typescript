Sometimes you expect an error to occur, but you don't want TypeScript to throw an error. You can use the `ts-expect-error` comment to suppress the error.

```typescript
// @ts-expect-error
const num: number = "string";
```

In this example, TypeScript would normally throw an error because we're trying to assign a string to a number. However, the `ts-expect-error` comment will suppress the error.

## When is this useful?

1. When integrating third-party libraries with missing, outdated, or incorrect type definitions - though you may want to consider writing your own type definitions instead.
2. Or, When you know TypeScript will complain about something that is actually valid at runtime.
3. Or when you're migrating a large codebase to TypeScript and you want to suppress type errors temporarily in a file or a section of code.

## When to avoid

1. When you're not sure why an error is happening.
2. When you're trying to suppress legitimate errors instead of fixing them.

Of course, this simple example feature should be used sparingly, as a last resort. It's generally better to fix the error rather than suppress it.
