// Using `this` in TypeScript
// The JS spec doesn't allow a parameter called `this`.
// So, in TypeScript, you can declare the type for `this` in the function body as the first parameter.

interface Book {
  price: number;
  numberSold: number;
  getRevenue: (this: Book) => number;
  getRevenueArrow: () => number;
}

const book: Book = {
  price: 65,
  numberSold: 1000,
  getRevenue: function () {
    return this.price * this.numberSold;
  },
  getRevenueArrow: () => {
    return book.price * book.numberSold;
  },
};

console.log(book.getRevenue()); // works without a bind.

const getRevenue = book.getRevenue.bind(book); // Must bind the method to the object so it compiles
getRevenue();

const getRevenueArrow = book.getRevenueArrow; // No need to bind since arrow function inherits this from the enclosing scope
getRevenueArrow(); // works without a bind.
