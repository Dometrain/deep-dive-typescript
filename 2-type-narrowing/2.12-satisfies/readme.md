# Satisfies

Problem: You want to be sure an expression satisfies a type, but you also want to keep the type as narrow as possible.

Solution: Use the `satisfies` keyword. Satisfies is a way to tell TypeScript "infer the type based on the code you see, and throw an error if the type isn't compatible."

```typescript
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(person.name);
}

const person = {
  name: "John",
  age: 30,
};

printPerson(person); // OK
```

Satisfies is often helpful when you have a Record type and you want to ensure that an object satisfies the type.
