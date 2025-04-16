// Conditionally include keys
type OnlyNumberProperties<T> = {
  [K in keyof T as T[K] extends number ? K : never]: T[K];
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type FilteredProduct = OnlyNumberProperties<Product>; // { id: number; price: number; }
