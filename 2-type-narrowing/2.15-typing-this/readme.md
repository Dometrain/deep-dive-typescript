# Typing `this`

Okay, this topic isn't traditionally considered type narrowing, but I'm going to cover it here since it's critical to understand and related to keeping your types narrow.

It's important to understand how `this` works with TypeScript. The JavaScript spec doesn't allow a parameter called `this`. So, TypeScript uses that syntax space to let you declare the type for `this` in the function body as the first parameter.

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
