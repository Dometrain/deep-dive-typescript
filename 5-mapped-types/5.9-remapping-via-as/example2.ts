// Can call other utilities - This filters out `id`
type WithoutId<T> = {
  [K in keyof T as Exclude<K, "id">]: T[K];
};

type Product = {
  id: number;
  name: string;
  price: number;
};

const product: WithoutId<Product> = {
  name: "Laptop",
  price: 1200,
};
