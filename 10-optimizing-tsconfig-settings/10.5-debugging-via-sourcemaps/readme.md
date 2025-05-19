# Enable sourcemaps

## Quick start

`tsc`
`npx run serve`

If you want to be able to debug your code in the browser or via Node debuggers, then enable sourcemaps in tsconfig.json.

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

This will allow you to see the original TypeScript files instead of the compiled JavaScript files when debugging.
