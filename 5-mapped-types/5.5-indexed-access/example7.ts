// Summary

type Book = {
  title: string;
  year: number;
};

type TitleType = Book["title"]; // string
type AllBookPropertyTypes = Book[keyof Book]; // string | number
