# NonNullable Utility Type

If you have an existing union that contains nullable types, you can create a new union that omits the nullable types using the `Nonnullable` utility type.

```ts
type IdOrNull = string | number | null;
type Id = NonNullable<IdOrNull>;
```
