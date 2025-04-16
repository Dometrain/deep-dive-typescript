// But a service that works with many different types might be a good candidate for pushing type parameters down.

// Need separate instance of service for each data type.
interface Service<T> {
  fetch(): Promise<T>;
  process(data: T): void;
}

// Pushing types down means a single service instance supports fetching many different types of data.
// But the downside is the type must be specified for each method call.
interface Service2 {
  fetch<T>(): Promise<T>;
  process<T>(data: T): void;
}
