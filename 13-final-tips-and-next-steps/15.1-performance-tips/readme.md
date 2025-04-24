# TypeScript Performance tips

- Split large projects / Use project references
- Ensure include/exclude is set correctly in tsconfig.json
- Use incremental builds
- Rely on your editor to do the type checking during development
- Use `--skipLibCheck` to skip type checking of all declaration files (\*.d.ts)
- Use `--noEmit` to skip emitting files when not needed
- Use `--noUnusedLocals` and `--noUnusedParameters` to catch unused variables and parameters
- Use [type-only imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) to avoid unnecessary code in the output
- tsc will be 10x faster when the new compiler written in Go is released.

Also see [TypeScript's Wiki on performance](https://github.com/microsoft/TypeScript/wiki/Performance)
