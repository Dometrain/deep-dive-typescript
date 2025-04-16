# Generic classes

Classes can be generic too. This allows you to create a class that can work with any type. Here's an example of a generic class:

```typescript
class Box<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index];
  }

  getAll(): T[] {
    return this.items;
  }
}
```

You can create instances of the `Box` class with different types:

```typescript
const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
console.log(numberBox.getAll()); // [1, 2]

const stringBox = new Box<string>();
stringBox.add("hello");
stringBox.add("world");
console.log(stringBox.getAll()); // ["hello", "world"]
```
