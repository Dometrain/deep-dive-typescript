# Conditional types

https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

When mapping over the keys of an existing type, you can use a conditional type to create a new type based on a condition. Conditional types narrow the initial type based on a condition.

Conditional types use the `extends` keyword along with a ternary operator. You can read `extends` as "if" in the context of conditional types.

The basic syntax:

```ts
SomeType extends OtherType ? TrueType : FalseType;
```

Example:

```ts
type IsString<T> = T extends string ? true : false;
```

Conditional types describe the relationship between types and inputs. They're are typically used with generics to create new types based on the input types. Conditional types are defined using the `extends` keyword, which allows you to create a type that depends on the input type.
