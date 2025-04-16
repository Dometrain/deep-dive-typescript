// Mapped type syntax example

type ExistingType = { id: number; name: string };
type NewKeyType = string;

type NewType = {
  // In a mapped type, the index signature syntax maps over the type's keys
  [Key in keyof ExistingType]: NewKeyType;
};
