export type Book = {
  title: string;
  pages: number;
};

export function describeBook(book: Book): string {
  return `${book.title} has ${book.pages} pages`;
}
