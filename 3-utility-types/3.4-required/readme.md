# Required Utility Type

Make all properties of an object required.

Given a type like this:

```typescript
type Person = {
  name?: string;
  age?: number;
  location?: string;
};
```

You can create a new type that makes all properties required like this:

```typescript
type RequiredPerson = Required<Person>;
```
