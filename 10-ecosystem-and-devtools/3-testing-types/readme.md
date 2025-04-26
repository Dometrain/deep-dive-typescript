# Testing types

Sometimes, you want to test your types. This can be useful when you have a complex type that you want to ensure is correct. You can write tests that check that the type is what you expect it to be.

This need not be complicated. You can declare a few simple types and use the `expect` function to check that the type is what you expect it to be. This is a simple way to test your types without needing a full testing framework.

## Example

This `Equal` type checks if two types are equal. It uses conditional types to check if `A` is assignable to `B` and vice versa.

```ts
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
```

And this `Expect` type errors at compile-time if the provided value isn't `true`

```ts
export type Expect<T extends true> = Equal<T, true>;
```

## Libraries

There are several libraries that can help you test your types. These libraries provide utilities to check if a type is what you expect it to be. Some of the most popular libraries include:

### [expect-type](https://www.npmjs.com/package/expect-type)

```ts
import { expectTypeOf } from "expect-type";
import { foo, bar } from "../foo";

// make sure `foo` has type {a: number}
expectTypeOf(foo).toEqualTypeOf<{ a: number }>();
```

### [type-testing](https://www.npmjs.com/package/type-testing)

Includes:

- Equal
- NotEqual
- Expect
- ExpectFalse
- Extends
- IsAny
- IsNever
- IsTuple
- IsUnion
- IsUnknown
- SimpleEqual
- TrueCases
- FalseCases

- [ts-expect](https://github.com/TypeStrong/ts-expect)
