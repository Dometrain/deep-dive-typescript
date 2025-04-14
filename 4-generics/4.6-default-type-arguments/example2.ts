// Default to any if no type is specified
interface Store<T = any> {
  state: T;
  setState: (newState: T) => void;
}

// Default usage (accepts any state)
const genericStore: Store = { state: { user: "Cory" }, setState: () => {} };

// Typed usage
const userStore: Store<{ name: string; age: number }> = {
  state: { name: "Alice", age: 30 },
  setState: (newState) => console.log(newState),
};
