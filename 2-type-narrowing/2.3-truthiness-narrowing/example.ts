// Type narrowing via truthiness
function log(value: string | null | undefined) {
  if (value) {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is " + value);
  }
}
