// Exercise 1:
// Push the type parameter down to the method level.
class DataProcessor {
  process<T>(data: T, callback: (item: T) => void) {
    callback(data);
  }

  processAll<T>(data: T[], callback: (item: T) => void) {
    data.forEach(callback);
  }
}
