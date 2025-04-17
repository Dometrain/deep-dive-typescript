// Tip 4. Using defaults saves people some keystrokes.
// BUT: it may be a tradeoff between convenience and safety.

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
