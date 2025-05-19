# Migration tips

When migrating a codebase from JS to TS, there are two schools of thought:

1. Start strict, and loosen in spots as needed.
2. Start loose, and migrate to stricter rules over time.

I prefer 1. It's safer.

With 2, we may never bother becoming stricter. And any new code is held to a low standard, which creates "type debt".

With 1, new code is held to a strict standard, and existing code can selectively have looser typing rules via nested tsconfigs, or by disabling TS in spots if necessary.

Default strict. Loosen when necessary.

By starting strict, you can slowly migrate your code to TypeScript by converting one file at a time. This allows you to gradually introduce TypeScript into your codebase without having to convert everything at once. Start with the most critical files such as the files that are touched most often, and work your way down to the less important ones. This approach also allows you to take advantage of TypeScript's type checking and other features as you go, rather than waiting until everything is converted.

Also, you can consider enabling `allowJs` and `checkJs` in your tsconfig.json at first. This allows TypeScript to type check JavaScript files. This is useful for gradually migrating a codebase from JavaScript to TypeScript. This gives you some type checks in your JS files, but it doesn't give you the full benefits of TypeScript. You can then gradually convert your JavaScript files to TypeScript files as you go.

You can also consider Airbnb's [ts-migrate](https://github.com/airbnb/ts-migrate) project, which is a tool to quickly migrate JavaScript codebases to TypeScript. It automates the migration process by basically doing two things:

1. First, it updates all file extensions from .js to .ts.
2. It adds `// @ts-expect-error`, and `any` as needed so the code compiles.

Again, this is a compromise. It means the code has many spots that aren't truly type safe, but you can then incrementally remove the `any` and ts-expect-error comments. So ts-migrate creates good starting point, but you'll need to do some manual work to clean up the code over time to improve type safety.
