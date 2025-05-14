Problem: TypeScript is structurally typed. So it doesn't care what a type is named, it just cares if the structure is compatible. And TypeScript doesn't support specific string or numeric values such as a Positive number, Negative numbers, NonZero number, or a specific country's currency. So, a string or number may be accidentally passed as an argument in the wrong spot. And an invalid value may be passed, so we'd like to specify a more specific type than merely number or string.

Example mistake:

```ts
type UserId = number;

type ProductId = number;

const getUserById = (id: UserId) => {
  // Logic to retrieve user
};

const getProductById = (id: ProductId) => {
  // Logic to retrieve product
};

const id: UserId = 1;

getProductById(id); // No type error, but incorrect usage
```

Also applies with objects:

```ts
type Cat = { name: string };
type Dog = { name: string };

const petCat = (cat: Cat) => {};
const myDog: Dog = { name: "spot" };
petCat(myDog); // works fine, but shouldn't
```

Sometimes we want to specify that a value has been validated or sanitized in some way, or use a type name that is more specific than type or string. A

Solution: Branded types, also known as opaque types or nominal types, are a way to create a new type based on an existing type, but with a unique identifier that distinguishes it from other types.
A "branded type" has an extra type system property that doesn't actually exist at runtime.
Remember, TypeScript is a structural type system, so two types are considered compatible if their members are compatible. Branded types are a way to simulate nominal typing in TypeScript.
Some examples where this is useful include: currency, distance, weight, etc. Anywhere that the unit of measure is important, and could potentially be mixed up.
or, anywhere that we're processing a number or value that has been validated or sanitized in some way, and we want to convey that information in the type system.
A branded type is especially useful when different currencies, distances, or weights are used in multiple places, and we want to ensure that the right type of value is used in the right place. In these cases, a string or number isn't specific enough.
Branded types create a new type based on an existing type but with a unique identifier that distinguishes it from other types.
Branded types create a distinction at compile time, to help assure that the right types are used in the right places.
