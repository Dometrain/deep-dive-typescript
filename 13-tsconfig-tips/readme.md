# tsconfig settings Tips

There are over 100 tsconfig settings, and I'm not going to bore you describing each one. They're well documented on [TypeScript's official documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

But I do want to share some concise recommendations. First, if you're starting a new TypeScript project, consider configuring TypeScript as strict as possible. This will help you catch potential errors early and enforce best practices. If you start loose, it's hard to tighten up later. But if you find the settings below are too strict for you team, you can loosen them up easily.

Let's talk through these settings.

# Strictest TypeScript mode

```json
{
  "compilerOptions": {
    "strict": true, // Enable all strict type checking options https://www.typescriptlang.org/tsconfig/#strict
    "allowUnusedLabels": false, // Disallow unused labels (labels are rarely used, and typically a mistake)
    "allowUnreachableCode": false, // Disallow unreachable code
    "exactOptionalPropertyTypes": true, // prop?: string allows only a string or the absence of the property.
    "noFallthroughCasesInSwitch": true, // Must break, return, or throw in all non-empty case
    "noImplicitOverride": true, // Functions which override must use the keyword `override`
    "noImplicitReturns": true, // All a function's code paths must have a return statement
    "noPropertyAccessFromIndexSignature": true, // Must use obj["key"] syntax for fields that may not exist
    "noUncheckedIndexedAccess": true, // Disallow accessing properties of an object that may not exist
    "noUnusedLocals": true, // Disallow unused local variables
    "noUnusedParameters": true, // Disallow unused parameters
    "isolatedModules": true, // Ensure each file can be safely transpiled independently
    "checkJs": true, // Type check JS files
    "forceConsistentCasingInFileNames": true // File references must have correct casing
  }
}
```

Above inspired by [bases strictest settings](https://github.com/tsconfig/bases/blob/031273b815ff7f672c7c9057fb7d19ef363054b1/bases/strictest.json).

## Avoid starting from scratch

These days, most frameworks have TypeScript support built in, and therefore, include a tsconfig.json file. If you're using a framework, I recommend starting with their tsconfig.json file and then modifying it to fit your needs. For example, Next.js, Nuxt, and Vite all include a tsconfig.json file. You can use these as a starting point and then modify them to fit your needs.

## Other Recommended tsconfig settings

Check out https://github.com/tsconfig/bases for a collection of tsconfig.json files that are recommended for different frameworks and libraries.

And the "[Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)" page on the TypeScript docs has a list of recommended tsconfig.json files for different project types.

## Multiple tsconfig files

Remember you can have multiple tsconfig files in your project. If you have some folders that need different settings, then you can place a tsconfig.json file in that folder. The settings in that file will override the settings in the root tsconfig.json file.

- https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html
