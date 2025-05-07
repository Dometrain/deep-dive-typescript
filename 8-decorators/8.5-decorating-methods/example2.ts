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
  getProfit(this: Book, printingCost: number) {
    return (this.price - printingCost) * this.numberSold;
  }

  getProfitArrow = (printingCost: number) => {
    return (this.price - printingCost) * this.numberSold;
  };
}

const book = new Book(65, 1000);

console.log(book.getProfit(1)); // works without a bind.

const getProfit = book.getProfit.bind(book); // Must bind the method to the object so it compiles
getProfit(1);

const getProfitArrow = book.getProfitArrow; // No need to bind since arrow function inherits this from the enclosing scope
getProfitArrow(1); // works without a bind.
