type User = {
  id: string | null;
};

// Declared this way, the type is wider than need be because the id field can be null
const userWide: User = {
  id: "1",
};

// This way, the type is as narrow as possible, but still assured to be a User
const userNarrow = {
  id: "1",
} satisfies User;

// This errors with userWide because `id` can be null. Works with userNarrow.
console.log(userNarrow.id.toUpperCase());
