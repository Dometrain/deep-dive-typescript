// Exercise 1:
// Push the type parameter down to the method level.
class DataProcessor<T> {
  process(data: T, callback: (item: T) => void) {
    callback(data);
  }

  processAll(data: T[], callback: (item: T) => void) {
    data.forEach(callback);
  }
}
