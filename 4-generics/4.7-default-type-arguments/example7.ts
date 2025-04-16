// If inference can't choose a candidate, the default type is inferred.

type User = {
  id: number;
  name: string;
  age?: number;
};

type Product = {
  id: number;
  name: string;
  price?: number;
};

interface Dictionary<T extends User | Product = User> {
  [key: string]: T;
}

const apple: Product = {
  id: 1,
  name: "Apple",
};

// Even though `apple` is a `Product`, the default type is inferred as `User` since inference can't choose a candidate.
const products: Dictionary = { a: apple };
