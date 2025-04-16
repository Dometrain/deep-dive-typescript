type User = {
  id: number;
  name: string;
  // We used the index signature syntax to specify a type for an object that accepts any property like this
  [key: string]: any; // index signature
};
