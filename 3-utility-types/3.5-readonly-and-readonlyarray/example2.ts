// ReadonlyArray utility type
const numbers: ReadonlyArray<number> = [1, 2, 3];

//@ts-expect-error
numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
