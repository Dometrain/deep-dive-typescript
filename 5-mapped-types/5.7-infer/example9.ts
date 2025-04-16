// Can use the variable declared via infer in other places in the conditional type
// Also note distribution: If T is a union, the infer variable is created for each member of the union
type StringsThatCanBeNumbers<T> = T extends `${infer U}`
  ? `${U}` extends `${number}`
    ? U
    : never
  : never;

// usage
type Num1 = StringsThatCanBeNumbers<"123" | "456" | "abc">; // "123"
type Num2 = StringsThatCanBeNumbers<"hello">; // never
