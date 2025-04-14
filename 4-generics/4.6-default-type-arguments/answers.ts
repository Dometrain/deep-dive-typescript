// Exercise: Testing Your Knowledge of Generic Parameter Defaults in TypeScript

// Question 1:
// Create a generic interface `ApiResponse` that represents an HTTP response.
// It should have a `data` property of type `T` and a `status` property of type `number`.
// Use a default type of `unknown` for the generic parameter `T`.

interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
}

// Example usage:
// Defaults to `unknown`
const response: ApiResponse = { data: { id: 1 }, success: true };

// Specifying a type for better inference
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Alice", age: 30 },
  success: true,
};

// Question 2:
// Create a generic type alias `Optional` that makes all properties of a given type `T` optional.
// Use a default type of `{ id: number }` for the generic parameter `T`.

type Optional<T = { id: number }> = {
  [K in keyof T]?: T[K];
};

// Example usage:
type User = { id: number; name: string };
const user: Optional<User> = { id: 1 }; // name is optional
const defaultOptional: Optional = {}; // T defaults to { id: number }
