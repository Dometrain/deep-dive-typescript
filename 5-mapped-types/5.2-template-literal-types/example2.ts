// Note how template literal syntax is used to create a dynamic type.
type HyphenatedString = `${string}-${string}`;

const hyphenatedString: HyphenatedString = "hello-world"; // OK
// const hyphenatedString2: HyphenatedString = "hello"; // Error: Type '"hello"' is not assignable to type '`${string}-${string}`'.
