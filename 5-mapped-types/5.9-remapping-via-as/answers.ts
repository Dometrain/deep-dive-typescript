// Exercise: Remapping via `as`

// Question 1:
// Create a new type called `LazyBook` that lazy loads properties of a `Book` type.
// The `LazyBook` type should have properties prefixed with `get` and capitalize the property name.
// For example, the `title` property should be `getTitle`.

// Basically, this:
// type LazyBook = {
//   getTitle: () => string;
//   getAuthor: () => string;
//   getPublishedYear: () => number;
// };

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

type LazyBook<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// Example usage:
const lazyBook: LazyBook<Book> = {
  getTitle: () => "The Great Gatsby",
  getAuthor: () => "F. Scott Fitzgerald",
  getPublishedYear: () => 1925,
};
