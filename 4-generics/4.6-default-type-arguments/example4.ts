// Repository that defaults to any
class Repository<T = any> {
  findAll(): T[] {
    return [] as T[];
  }
}

// Usage with default `any`
const genericRepo = new Repository();
const users = genericRepo.findAll(); // users: any[]

// Usage with a specific model
const userRepo = new Repository<{ id: number; name: string }>();
const userList = userRepo.findAll(); // userList: { id: number; name: string }[]
