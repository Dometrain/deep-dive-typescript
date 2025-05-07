// Using this in TypeScript
// The JS spec doesn't allow a parameter called `this`.
// So, in TypeScript, you can declare the type for `this` in the function body as the first parameter.

interface Book {
  price: number;
  numberSold: number;
  getRevenue: (this: Book) => number;
}

const book: Book = {
  price: 65,
  numberSold: 1000,
  getRevenue: function (this: Book) {
    return this.price * this.numberSold;
  },
};

console.log(book.getRevenue()); // works without a bind.

const getTotalRevenue = book.getRevenue.bind(book); // Must bind the method to the object so it compiles
getTotalRevenue(); // Error: this is undefined
