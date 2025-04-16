import type { User } from "./user";

// Type argument on each method
interface Repository {
  getById<T>(id: string): T;
  getAll<T>(): T[];
  create<T>(user: T): void;
}

const userRepository: Repository = {
  getById: <T>(id: string) => {
    // Implementation goes here
    return {} as T;
  },
  getAll: <T>() => {
    // Implementation goes here
    return [] as T[];
  },
  create: <T>(user: T) => {
    // Implementation goes here
  },
};

// Have to specify the type argument every time we invoke a method 👎
userRepository.getById<User>("123");
userRepository.getAll<User>(); //
