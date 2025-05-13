# Migration tips

If you need to migrate a JS codebase, consider enabling `allowJs` and `checkJs` in your tsconfig.json at first to allow TypeScript to type check JavaScript files. This is useful for gradually migrating a codebase from JavaScript to TypeScript. This allows you to start using TypeScript features in your JavaScript files without having to convert everything at once.

You can also consider Airbnb's [ts-migrate](https://github.com/airbnb/ts-migrate) project, which is a tool for migrating JavaScript codebases to TypeScript. It automates the migration process by converting all JS files to TS files to accelerate the TypeScript migration process. The resulting code will pass the build, but there will be lots of `// @ts-expect-error`, and `any` that will need to be fixed over time. This is a good starting point, but you will need to do some manual work to clean up the code over time and make it more type-safe.
