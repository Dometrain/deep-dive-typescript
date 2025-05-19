# Strictest TypeScript mode

Whether you're converting an existing project, or starting a new project, consider configuring TypeScript as strict as possible. This will help you catch potential errors early and enforce best practices. But if you find the settings below are too strict for you team, you can loosen them up easily.

Let's talk through these settings.

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

Inspired by [bases strictest settings](https://github.com/tsconfig/bases/blob/031273b815ff7f672c7c9057fb7d19ef363054b1/bases/strictest.json).
