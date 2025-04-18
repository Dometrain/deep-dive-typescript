// Chain ternary operators if needed
type StringFromType<T> = T extends string
  ? "string"
  : T extends boolean
    ? "boolean"
    : T extends Error
      ? "error"
      : never;

type a = StringFromType<"hi">; // 'string'
type b = StringFromType<true>; // 'boolean'
type c = StringFromType<Error>; // 'error';
type d = StringFromType<{ name: "Cory" }>; // never
