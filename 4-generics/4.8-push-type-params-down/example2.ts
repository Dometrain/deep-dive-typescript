// In this case, the generic type at the class level makes sense (because all the methods work with the same type).
type User = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

class Repository<T> {
  getById(id: number): T {
    /* Implementation */
    return {} as T;
  }
  getAll(): T[] {
    /* Implementation */
    return [] as T[];
  }
}

const userRepo = new Repository<User>(); // Must specify `User` at instantiation

// Pushing type params down would allow for different types in each method, but that's likely not attractive for a repository.
class Repository2 {
  getById<T>(id: number): T {
    /* Implementation */
    return {} as T;
  }
  getAll<T>(): T[] {
    /* Implementation */
    return [] as T[];
  }
}

const userRepo2 = new Repository2(); // Don't specify `User` at instantiation

// Type is specified for each method
const user = userRepo2.getById<User>(1);
const products = userRepo2.getAll<Product>();
