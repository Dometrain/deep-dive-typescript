# Mapped Types Intro

TypeScript supports creating types from other types. We already explored TypeScript's built-in utility types like Pick, Required, and so on. They're are an easy way to create new types from existing types.

But what if TypeScript's built-in utility types aren't enough? What if you want to create a complex new type from an existing type using your own logic?

That's where mapped types come in handy. A mapped type maps an existing type to a new type.

In this section we'll explore mapped types in detail including key features like template literal types, conditional types, looping, and more.

Let's begin with a simple mapping example using plain JS:

```ts
// In JS, we use the map function to create a new array from an an existing array.
[1, 2, 3].map((value) => value * 2); // Yields [2, 4, 6]

// In TS, we can use mapped types to transform one type into another type.
```

So imagine we want to create a new type from an existing type with some minor differences. For example, we might want to create a new type that has the same keys as an existing type, but with different types or names for each key.

Well, one obvious simple solution is to copy and paste.

For example, if I have a user type and I want to create a related type for lazy loading users, I could copy/paste, then tweak like this:

```ts
type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

// Copy pasted, renamed, and tweaked.
type EmployeePermissions = {
  changeEmail: boolean;
  changeAge: boolean;
  changeRole: boolean;
};
```

But this isn't ideal. These two types are related, but that isn't explicit. It's error-prone because if I add a new property to the `EmployeeConfig` type, I have to remember to add it to the `EmployeePermissions` type. And TypeScript has no way to ensure that the two types remain in sync.

If my goal is to keep these in sync, then ideally I'd derive one type from the other. This is where mapped types come in. Mapped types are a way to create a new type based on an existing type. They're useful for creating new types that are similar to existing types. Mapped types help us avoid repeating ourselves - they keep our types "DRY".

```ts
// Using mapped type to derive EmployeePermissions

type EmployeeConfig = {
  email: string;
  age: number;
  role: string;
};

type EmployeePermissions = {
  [Property in keyof EmployeeConfig as `change${Capitalize<Property>}`]: boolean;
};
```

This may look intimidating, but by the end of this section, you'll understand how to read this.

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
// Mapped type syntax example

type ExistingType = { id: number; name: string };
type NewKeyType = string;

type NewType = {
  // In a mapped type, the index signature syntax maps over the type's keys
  [Key in keyof ExistingType]: NewKeyType;
};
```

Don't worry if this looks confusing. We'll break it down a piece at a time in the next few clips.

This creates a new type called `NewType`. It uses the `keyof` operator to create a union of all the `ExistingType`'s keys. The `in` narrowing operator loops through the union of keys. (in other words, it's iterating over the source type's properties). For each key in `ExistingType`, the mapped type creates a new key in `NewType` with the type `NewKeyType`. So this example merely copies the keys from `ExistingType` to `NewType` with a string for each field.

The point of a mapped type is to create a new type that's different from the existing type. Sometimes the differences are minor like omitting certain properties, making all properties readonly, or renaming each property.

## Warning

And here's a wild fact: TypeScript's type system is turing complete. You can write any kind of program in TypeScript types. In fact, the game Doom was recently released written entirely in TypeScript types! Of course, just because you can, doesn't mean you should!

A word of warning before we dig in: Complex types are super useful for libraries. But they're rarely necessary for apps. Types for apps should typically be simple. If an app's types are complex, investigate - it's often needless complexity that can be refactored.
