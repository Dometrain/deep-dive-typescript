// Type narrowing via control flow and return early
function controlFlowExample(x: string | null) {
  if (x !== null) {
    return x.toUpperCase();
  }
  console.log(`${x} is null`);
}
