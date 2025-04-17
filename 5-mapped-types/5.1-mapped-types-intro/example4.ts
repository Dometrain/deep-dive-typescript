type User = {
  id: number;
  name: string;
  // index signature syntax
  // Accept any string for a property name
  [key: string]: any; // index signature
};
