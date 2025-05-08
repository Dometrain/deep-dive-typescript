// ReturnType - Extract the return type of a function
// Useful when you want to create a type based on the
// return type of another function.

function getUser() {
  return {
    id: 1,
    name: "John Doe",
  };
}

type UserReturnType = ReturnType<typeof getUser>; // { id: number; name: string; }
