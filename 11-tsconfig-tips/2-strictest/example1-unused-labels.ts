// Label example

let str = "";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1; // skip to next iteration if i is 1
  }
  str = str + i;
}

console.log(str);

// Unused label example
function verifyAge(age: number) {
  if (age > 18) {
    verified: true; // Unused label. Likely a typo.
  }
}
