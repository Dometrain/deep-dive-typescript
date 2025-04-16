An interface can also be generic.

```ts
// An interface can be generic too.
interface GenericFirstElementFn {
  <Type>(arg: Type): Type;
}

function firstElement<T>(arg: T): T {
  return arg;
}

let myFirstElement: GenericFirstElementFn = firstElement;
```
