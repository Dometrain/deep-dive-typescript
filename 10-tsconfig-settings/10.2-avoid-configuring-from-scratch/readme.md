## Avoid starting from scratch

I'll start with a simple suggestion. Avoid starting your tsconfig from scratch. These days, most frameworks have TypeScript support built in, and therefore, include a tsconfig.json file, or publish recommended settings. So, if you're using a framework, I recommend starting with their tsconfig.json file and then modifying it to fit your needs.

For example, Next.js, Nuxt, and Vite all include a tsconfig.json file. Use these as a starting point and then modify them to fit your needs.

## Other Recommended tsconfig settings

Also, check out [tsconfig/bases](https://github.com/tsconfig/bases) for a collection of tsconfig.json files that are recommended for different frameworks and libraries.

And the "[Choosing Compiler Options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)" page on the TypeScript docs has a list of recommended tsconfig.json files for different project types.

## Extending tsconfig.json

As I've shown in this course, if some of your folders need different tsconfig settings, you can place a tsconfig.json file in that folder. The settings in that file will override the settings in the root tsconfig.json file.
