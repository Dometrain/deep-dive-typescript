// Uppercase
type UppercaseMessage = Uppercase<"hello world">; // 'HELLO WORLD'

// Lowercase
type LowercaseMessage = Lowercase<"HELLO WORLD">; // 'hello world'

// Capitalize
type CapitalizeMessage = Capitalize<"hello world">; // 'Hello world'

// Uncapitalize
type UncapitalizeMessage = Uncapitalize<"Hello World">; // 'hello World'

// Note compile-time checks for the correct usage below
const upper: UppercaseMessage = "HELLO WORLD";
const lower: LowercaseMessage = "hello world";
const capital: CapitalizeMessage = "Hello world";
const uncapital: UncapitalizeMessage = "hello World";
