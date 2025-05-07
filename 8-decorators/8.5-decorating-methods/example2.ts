// Using `this` in TypeScript
// The JS spec doesn't allow a parameter called `this`.
// So, in TypeScript, you can declare the type for `this` in the function body as the first parameter.

interface Book {
  price: number;
  numberSold: number;
  getProfit: (this: Book, printingCost: number) => number;
  getProfitArrow: (printingCost: number) => number;
}

const book: Book = {
  price: 65,
  numberSold: 1000,
  getProfit: function (printingCost: number) {
    return (this.price - printingCost) * this.numberSold;
  },
  getProfitArrow: (printingCost: number) => {
    return (book.price - printingCost) * book.numberSold;
  },
};

console.log(book.getProfit(1)); // works without a bind.

const getProfit = book.getProfit.bind(book); // Must bind the method to the object so it compiles
console.log(getProfit(1));

const getProfitArrow = book.getProfitArrow; // No need to bind since arrow function inherits this from the enclosing scope
console.log(getProfitArrow(1)); // works without a bind.
