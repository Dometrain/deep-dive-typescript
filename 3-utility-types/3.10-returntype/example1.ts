// ReturnType utility type

function getUser() {
  return {
    id: 1,
    name: "John Doe",
  };
}

type UserReturnType = ReturnType<typeof getUser>; // { id: number; name: string; }
