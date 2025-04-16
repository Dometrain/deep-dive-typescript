// Get unique types in array
// type Flatten<T> = T extends any[] ? T[number] : T;

// or, can use infer
type Flatten<T> = T extends Array<infer Item> ? Item : T;

// Extracts out the element type.
type Str = Flatten<string | number[]>;

// Leaves a non-array type alone.
type Num = Flatten<number>;
