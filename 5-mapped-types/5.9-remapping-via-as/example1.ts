// Changing key names by remapping via `as`

// General structure example
type MappedTypeExample<Type> = {
  [Keys in keyof Type as KeyType]: Type[Keys];
};

// Basic key remapping
type RenameKeys<T> = {
  [K in keyof T as `new_${string & K}`]: T[K];
};

type OriginalType = {
  id: number;
  name: string;
  price: number;
};
type RenamedType = RenameKeys<OriginalType>;
