// Get unique types in array
type Flatten<T> = T extends Array<infer Item> ? Item : T;

type Flatten2<T> = T extends any[] ? T[number] : T; // alternative approach

type Str = Flatten<string | number[]>; // Extracts out the element type.
type Num = Flatten<number>; // Leaves a non-array type alone.
