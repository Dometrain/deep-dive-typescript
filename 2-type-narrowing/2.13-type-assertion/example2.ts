// A common use case - working with JSON data fetched from an API.
interface User {
  id: number;
  name: string;
}

async function getUserById(id: number) {
  const resp = await fetch("http://example.com/user/" + id);
  return resp.json() as Promise<User>; // Assert that the response json is of type `User`.
}
