Add runtime type guards or validation

```ts
function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string";
}
```

Log types using helper functions (at runtime)

```ts
function assertUnreachable(x: never): never {
  throw new Error("Unreachable: " + x);
}
```

Enable sourcemaps in tsconfig.json so you can debug original .ts files in the browser or Node debuggers.

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

If you're not hitting never, make it a string temporarily.

```ts
type AssertNotNever<T> = [T] extends [never] ? "ERROR: is never" : T;
```

Break complex types into smaller parts to isolate the issue, and name each goal.

```ts
type A = ...
type B = ...
type C = A & B // move step-by-step
```

Consider writing tests for your types. Libraries for testing types include:

- tsd
- Vitest or Jest
- Roll your own via `Expect`, `Equal`, etc. utility types.

Example:

```ts
type Expect<T extends true> = T;
type IsArray<T> = T extends Array<any> ? true : false;
type X = Expect<IsArray<number[]>>; // this would fail if our isArray type is incorrect
type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;
```
