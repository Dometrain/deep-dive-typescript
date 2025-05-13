Okay, this is the broadest comment. If you want to disable type checking for an entire file, you can use the `// @ts-nocheck` comment at the top of the file.

```ts
// @ts-nocheck
// This file is not type-checked
```

Obviously, this should rarely be used, but may be useful if you're working on a file that has a lot of type errors and you want to be able to compile it without fixing them all.
