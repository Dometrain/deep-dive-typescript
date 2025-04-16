// Tip 4. Consider using defaults to save people some keystrokes.

// Default the data type to `unknown`.
type ApiResponse<T = unknown> = {
  data: T;
  status: number;
};

// Default the status code to `200`.
const response1: ApiResponse = {
  data: { name: "John Doe" },
  status: 200,
};

response1.data; // unknown
