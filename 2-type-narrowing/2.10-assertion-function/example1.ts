function assertIsString(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string!");
  }
}
