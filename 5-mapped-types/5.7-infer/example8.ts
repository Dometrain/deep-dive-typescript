// Recursively flatten an array
type Flatten<T> = T extends Array<infer Item> ? Item : T;

type FlattenDeep<T> = T extends Array<infer U> ? Flatten<U> : T;

// Usage
type NestedArray = number[][][];
type NumArray = FlattenDeep<NestedArray>; // number[]
