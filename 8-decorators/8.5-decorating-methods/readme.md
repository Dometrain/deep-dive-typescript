# Method decorators

Method decorators decorate class methods. They allow you to modify the behavior of a method when it is called, without changing the method's code directly.

A method decorator is a function that takes a method as an argument and returns a new method. The new method can add functionality before or after the original method is called, or even replace it entirely.

To understand decorators, it's important to understand how `this` works with TypeScript. The JavaScript spec doesn't allow a parameter called `this`. So, TypeScript uses that syntax space to let you declare the type for `this` in the function body as the first parameter.

Here's the rule: If the first parameter is called `this`, it's used as the type for `this` in the function body. This is a TypeScript-specific feature and is not part of the JavaScript specification. It's basically a fake parameter that TypeScript uses to enforce the type of `this` in the function body. You must call the first parameter `this` so TypeScript knows your intent.

## This example

```ts
interface Book {
  price: number;
  numberSold: number;
  getRevenue: (this: Book) => number;
  getRevenueArrow: (this: Book) => number;
}

const book: Book = {
  price: 65,
  numberSold: 1000,
  getRevenue: function (this: Book) {
    return this.price * this.numberSold;
  },
  getRevenueArrow: () => {
    return book.price * book.numberSold;
  },
};

console.log(book.getRevenue()); // works without a bind.

const getTotalRevenue = book.getRevenue.bind(book); // Must bind the method to the object so it compiles
getTotalRevenue();

const getTotalRevenueArrow = book.getRevenueArrow; // No need to bind since arrow function inherits this from the enclosing scope
getTotalRevenueArrow(); // works without a bind.
```

Understanding `this` is important for decorating methods, getters, and setters.

Method decorators are useful for a variety of purposes, such as:

- Tracing invocations
- Binding methods to instances
- Enhancing behavior
- Validating method arguments
- Caching method results
- Performance monitoring

## Example: Logging Method Calls

In this example, we add performance logging to a method. The decorator logs the method's execution time.

The method decorator is a generic function that accepts 3 type arguments:

- `This`: The method's this context.
- `Args`: The method's arguments.
- `Return`: The method's return type.

We use these generic types to ensure that the decorator can be applied to any method, regardless of its signature.

```ts
// Log method performance
function measure<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  // This assures the decorator is only used as a method decorator
  _context: ClassMethodDecoratorContext
) {
  function replacementFunction(this: This, ...args: Args): Return {
    const start = performance.now();
    const result = originalMethod.call(this, ...args);
    const end = performance.now();
    console.log(`Execution time: ${end - start} milliseconds`);
    return result;
  }
  return replacementFunction;
}

class Person {
  @measure
  greet() {
    console.log("Hi!");
  }
}

const person = new Person();
person.greet(); // Logs "Hi!" and the execution time
```
