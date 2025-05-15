// `unique symbol` can't be accessed at runtime. It's just a type.

declare const isSerializable: unique symbol; // Just a type, not a value.

const user = {
  name: "Cory",
  email: "c@example.com",
  [isSerializable]: true, // Fails at runtime. Can't use `unique symbol` as a property key because it doesn't exist at runtime.
};

// I'll show a real world use case in the next clip.
