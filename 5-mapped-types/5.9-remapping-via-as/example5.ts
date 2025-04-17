// Omit properties of an object type based on types.
type OmitByType<T, TOmit> = {
  [key in keyof T as T[key] extends TOmit ? never : key]: T[key];
};

// Example usage:
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type ProductWithoutNumber = OmitByType<Product, number>;
