https://stackoverflow.com/a/50214853/26180

Problem: You'd like to create a new type that's similar to an existing type.

Solution: Well, one obvious simple solution is to copy and paste.

For example, if I have a user type with all required properties, but I need to create a separate user type with all optional properties, I could just copy and paste like this.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type OptionalUser = {
  id?: number;
  name?: string;
  email?: string;
};
```

But this isn't ideal. It's error-prone because if I add a new property to the `User` type, I have to remember to add it to the `OptionalUser` type. And TypeScript has no way to ensure that the two types remain in sync.

Now, I could create a base type with all the shared properties and then create two separate types that extend the base type. This is a better solution because if I add a new property to the base type, the two types that extend it will automatically inherit the new property.

```ts
type BaseUser = {
  id: number;
  name: string;
  email: string;
};

type User = BaseUser;

type OptionalUser = BaseUser & {
  id?: number;
  name?: string;
  email?: string;
};
```

This is better because if I add a new property to `BaseUser`, the `User` and `OptionalUser` types will automatically inherit the new property. But it's still not ideal because I have to remember to extend the `BaseUser` type when creating new types that are similar to my User type. And TypeScript has no way to ensure that the new types remain in sync with the `BaseUser` type. I may add extra properties to `User` or `OptionalUser` that aren't in `BaseUser`.

If my goal is to keep these in sync, then ideally I'd derive one type from the other. This is where mapped types come in. Mapped types are a way to create a new type based on an existing type. They're useful for creating new types that are similar to existing types but with slight differences.

A mapped type is a new type derived from an existing type. A mapped type maps over a type's keys to create a new type. Sometimes the new type is slightly different, like a mutable version of a readonly type. Sometimes it adds or omits certain properties, or renames properties.

Mapped types build on the index signature syntax. We used the index signature syntax to specify a type for an object that accepts any property like this:

```ts
type User = {
  id: number;
  name: string;
  [key: string]: any; // index signature
};
```

But in a mapped type, the index signature syntax does something different - it maps over the keys of an existing type. Here's the syntax for a mapped type:

```ts
type NewType = {
  [Key in keyof ExistingType]: NewKeyType;
};
```

This creates a new type called `NewType`. It uses the `keyof` operator to create a union of all the `ExistingType`'s keys. The `in` narrowing operator loops through the union of keys. (in other words, it's iterating over the source type's properties). For each key in `ExistingType`, the mapped type creates a new key in `NewType` with the type `NewKeyType`. So this example merely copies the keys from `ExistingType` to `NewType` with a new type. Not useful. The point of a mapped type is to create a new type that's different from the existing type. Sometimes the differences are minor like omitting certain properties, making all properties readonly, or renaming each property.

Here's an example that creates a mutable version of a readonly type:

```ts
type Mutable<T> = {
  -readonly [Key in keyof T]: T[Key];
};
```

This is a custom type mapper called `Mutable`. Most custom type mappers accept a generic type parameter, typically called `T` to represent the existing type that we're going to map over. This custom type maps over the keys of `T`, the type provided. For each key in `T`, it creates a new key in `Mutable` with the same type as the key in `T`. But it also removes the `readonly` modifier from each key using the `-` in front of readonly. So this mapped type creates a new type that's mutable, unlike the original type `T`.

Mapped types are useful for creating new types based on existing types. You map over the keys of an existing type to create a new type. The syntax for a mapped type is:

```ts
type NewType = {
  [Key in keyof ExistingType]: NewKeyType;
};
```
