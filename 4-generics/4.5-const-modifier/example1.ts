// Const modifier in generics
const echo = <const T>(input: T) => {
  return input;
};

const result = echo({ name: "Cory" });
