// `this` context applies outside classes too.

interface Book {
  price: number;
  numberSold: number;
  getRevenue: (this: Book) => number; // Assure the this context is the Book object
  getRevenueArrow: () => number; // Arrow function doesn't need this context since it inherits from the enclosing scope
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
