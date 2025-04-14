function log(value: string | null | undefined) {
  if (value) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is null or undefined.");
  }
}
