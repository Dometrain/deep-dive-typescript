// Preserve literal via const modifier (makes type read only)
const echo = <const T>(input: T) => {
  return input;
};

const result = echo({ name: "Cory" });
