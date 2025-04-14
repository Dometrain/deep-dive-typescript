type SecureUrl = `https://${string}`;

const url: SecureUrl = "https://example.com"; // OK

// const url2: SecureUrl = "http://example.com"; // Error: Type '"http://example.com"' is not assignable to type 'SecureUrl'.
