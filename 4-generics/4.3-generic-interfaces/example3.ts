import type { User } from "./user";

// Type argument on the interface
interface Repository<T> {
  getById(id: string): T;
  getAll(): T[];
  create(user: T): void;
}

const userRepository2: Repository<User> = {
  getById: (id: string) => {
    // Implementation goes here
    return {} as User;
  },
  getAll: () => {
    // Implementation goes here
    return [] as User[];
  },
  create: (user: User) => {
    // Implementation goes here
  },
};

// No need to specify the type argument on each method 👍
userRepository2.getById("123");
userRepository2.getAll();
