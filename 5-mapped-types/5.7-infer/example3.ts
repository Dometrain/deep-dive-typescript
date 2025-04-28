// Goal: Get unwrapped promise's type

// This won't work. TypeScript requires declaring type variables explicitly:
// type UnwrapPromiseWrong<T> = T extends Promise<U> ? U : never;

// Solution: Use `infer` to infer the promise's type and assign it to `U`
type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

const numberPromise = Promise.resolve(42);
type Result = UnwrapPromise<typeof numberPromise>; // `number`
type Result2 = UnwrapPromise<Promise<string>>; // `string`
