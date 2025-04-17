// Mapped type syntax example

type User = { id: number; name: string };

type UserWithAllStringValues = {
  // In a mapped type, the index signature syntax maps over the type's keys
  [Key in keyof User]: string;
};
