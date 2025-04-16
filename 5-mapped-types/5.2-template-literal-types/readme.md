# Template Literal Types

Template literal types are a way to create a type from a string literal. This is useful when you want to create a type that enforces a specific string format.

```ts
type Units = "px" | "rem" | "em" | "%";

type Spacing = `${number}${Units}`;

const spacing: Spacing = "124em"; // OK

type HyphenatedString = `${string}-${string}`;

const hyphenatedString: HyphenatedString = "hello-world"; // OK

type SecureUrl = `https://${string}`;
const url: SecureUrl = "https://example.com"; // OK

type HexColor = `#${string}`;
```
