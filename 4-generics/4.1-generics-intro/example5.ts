// Many other JS features that provide generic arguments in TypeScript...
const map = new Map<string, number>([
  ["Alice", 1],
  ["Bob", 2],
]);

const promise = new Promise<string>((resolve) => {
  resolve("Hello");
});

const array: Array<string> = [];

const record: Record<string, number> = {
  Alice: 1,
  Bob: 2,
};
