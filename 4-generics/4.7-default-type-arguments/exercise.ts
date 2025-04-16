// Exercise: Testing Your Knowledge of Generic Parameter Defaults in TypeScript

// Question 1:
// Create a generic interface `ApiResponse` that represents an HTTP response.
// It should have a `data` property of type `T` and a `status` property of type `number`.
// Use a default type of `unknown` for the generic parameter `T`.

// Example usage:
// Defaults to `unknown`
// const response: ApiResponse = { data: { id: 1 }, success: true };

// Specifying a type for better inference
// const userResponse: ApiResponse<{ name: string; age: number }> = {
//   data: { name: "Alice", age: 30 },
//   success: true,
// };

// ------------------------------------------------

// Question 2:
// Create a `Repository` class that represents a data repository.
// It should have a generic type parameter `T` that represents the model type
// and a defaults to type `any`.
// It should have a method `findAll` that returns an array of type `T`.
// Just stub in the findAll implementation as `return [] as T[];`

// Example usage:
// const genericRepo = new Repository(); // Use default of `any`
// const users = genericRepo.findAll(); // users: any[]

// const userRepo = new Repository<{ id: number; name: string }>(); // Use a specific model
// const userList = userRepo.findAll(); // userList: { id: number; name: string }[]
