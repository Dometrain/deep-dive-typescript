// The `in` operator has 3 uses in TypeScript:

// 1. Looping over an object's keys (plain JS)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(obj[key]); // 1, 2, 3
}

// 2. Safely check if a property exists (we did this in the type narrowing section)
if ("a" in obj) {
  console.log("obj has a property named a");
}

// 3. Iterate over a union's members or an object's keys.
