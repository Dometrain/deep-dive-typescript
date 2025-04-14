# Partial Utility Type

Make all properties of an object optional.

Given a type like this:

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};
```

You can create a new type that makes all properties optional like this:

```typescript
type PartialPerson = Partial<Person>;
```
