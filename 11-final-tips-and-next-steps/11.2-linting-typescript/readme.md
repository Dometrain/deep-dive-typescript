# Linting TypeScript

In JavaScript, linters are a popular way to analyze code for potential errors and enforce coding standards. ESLint and Biome are popular linting tools that support both JavaScript and TypeScript.

ESLint and Biome are both extensible and can be configured to work with various plugins and rulesets. They can help you catch common mistakes, enforce coding styles, and improve code quality. Biome is a newer tool that aims to be a complete JavaScript and TypeScript toolchain, while ESLint is more focused solely on linting.

If you use ESLint, I recommend using [typescript-eslint](https://typescript-eslint.io/). It contains dozens of useful rules to help enforce coding standards. It provides recommended rules as a starting point.

If you use Biome, typescript-eslint is built in and Biome provides recommended rules as well. And Biome has other features like a built-in formatter that replaces the need for tools like Prettier as well.

Bottom line, configure your linter to work with TypeScript. Doing so saves time in code reviews by programmatically enforcing your team's coding standards. It also may help catch potential bugs before they make it into production.
