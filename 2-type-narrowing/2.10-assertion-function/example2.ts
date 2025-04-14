// Assertions can be more complex and contain multiple checks
function assertIsStringWithAtLeast3Chars(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string!");
  }
  if (value.length < 3) {
    throw new Error("String too short!");
  }
}

const myString = "12";
assertIsStringWithAtLeast3Chars(myString); // Runtime error: String too short!
