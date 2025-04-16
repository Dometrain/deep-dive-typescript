// Like JS args, required type arguments must be first.
interface ApiResponse<TError, TData = unknown> {
  data: TData;
  success: boolean;
  error?: TError;
}

// Note that 2nd type argument can be omitted.
const response: ApiResponse<Error> = { data: { id: 1 }, success: true };

// Specifying a type for better inference
const userResponse: ApiResponse<Error, { name: string; age: number }> = {
  data: { name: "Alice", age: 30 },
  success: true,
};
