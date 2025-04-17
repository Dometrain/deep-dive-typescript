// Can use TypeScript's utility types inside a template literal type.
type SecureUrl = `https://${Lowercase<string>}`;

const url: SecureUrl = "https://example.com"; // OK

// const url2: SecureUrl = "http://example.com"; // Error
// const url3: SecureUrl = "https://Example.com"; // Error
