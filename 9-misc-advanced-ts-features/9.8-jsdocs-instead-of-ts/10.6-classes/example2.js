// Or, can use @constructor to declare constructor function

/**
 * @constructor
 * @param {number} data
 */
function DataProcessor2(data) {
  // property types can be inferred
  this.name = "processor";

  // or set explicitly
  /** @type {string | null} */
  this.goal = null;

  // or simply annotated, if they're set elsewhere
  /** @type {number} */
  //   this.threads;

  this.initialize(data);
}

/**
 * @param {number} threads
 */
DataProcessor2.prototype.initialize = function (threads) {
  this.threads = threads;
};

let processor2 = new DataProcessor2(0);
