# TypeScript Performance tips

Large TypeScript projects can be slow to compile. Here are some quick tips to improve performance:

1. Split large projects into smaller projects. This can be done by splitting the code into multiple repositories, or by extracting packages. This allows TypeScript to only compile the files that have changed, rather than recompiling the entire project.
2. Use project references. This allows TypeScript to only compile the files that have changed, rather than recompiling the entire project. Once built, projects reference the built artifacts (the .js + .d.ts files) rather than the source. This is especially useful for large projects with many dependencies. This can improve the speed of typechecking and compiling, reduce memory usage when using an editor, and improve enforcement of the logical groupings of your program.
3. Ensure `include/exclude` only includes necessary files in `tsconfig.json`.
4. Avoid needless compiling during development. Rely on your editor.
5. Use `--skipLibCheck` to skip type checking of all declaration files (\*.d.ts)
6. Use `--noEmit` to skip emitting files if you workflow doesn't require emitting .js files. (for example, if you are using Bun, ts-node, or modern Node with built-in TS support)
7. Use `--noUnusedLocals` and `--noUnusedParameters` to catch unused variables and parameters
8. Enable incremental compilation with `--incremental` or `--watch`. This speeds up subsequent builds by only recompiling files that have changed.
9. Good news - tsc is being rewritten in Go. It's expected to be 10x faster when released.

Also see [TypeScript's Wiki on performance](https://github.com/microsoft/TypeScript/wiki/Performance)
