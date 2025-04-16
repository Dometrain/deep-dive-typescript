// Generic class
// T keeps the type info consistent across the class methods.

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

  // Static methods can't access the class' type parameter.
  // It's only accessible by the instance.
  // So must accept a separate T here.
  static removeItem<T>(items: T[], index: number): T[] {
    return items.filter((_, i) => i !== index);
  }
}

// Usage:
const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
const firstNumber = numberBox.get(0); // Should return 1
const allNumbers = numberBox.getAll(); // Should return [1, 2]

const stringBox = new Box<string>();
stringBox.add("Hello");
stringBox.add("World");
const firstString = stringBox.get(0); // Should return "Hello"
