// Can annotate classes too
class DataProcessor {
  /**
   * @param {number} data
   */
  constructor(data) {
    // property types can be inferred
    this.name = "processor";

    // or set explicitly
    /** @type {string | null} */
    this.goal = null;

    this.initialize(data);
  }

  /**
   * @param {number} threads
   */
  initialize = function (threads) {
    this.threads = threads;
  };
}

let processor = new DataProcessor(0);
