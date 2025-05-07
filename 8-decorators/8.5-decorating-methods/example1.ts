// Using `this` in TypeScript
// The JS spec doesn't allow a parameter called `this`.
// So, in TypeScript, you can declare the type for `this` in the function body as the first parameter.

class Book {
  price: number;
  numberSold: number;

  constructor(price: number, numberSold: number) {
    this.price = price;
    this.numberSold = numberSold;
  }

  // Assure the this context is the Book object
  getRevenue(this: Book) {
    return this.price * this.numberSold;
  }

  getRevenueArrow = () => {
    return this.price * this.numberSold;
  };
}

const book = new Book(65, 1000);

console.log(book.getRevenue()); // works without a bind.

const getRevenue = book.getRevenue.bind(book); // Must bind the method to the object so it compiles
getRevenue();

const getRevenueArrow = book.getRevenueArrow; // No need to bind since arrow function inherits this from the enclosing scope
getRevenueArrow(); // works without a bind.
