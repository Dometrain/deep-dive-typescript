// Evolving any - If a variable starts without a type, it is any
// Yet the type "evolves" as you assign values
// Note: tsconfig.json has "noImplicitAny": true

let x; // x is any
x = 1; // x is number
x = Math.round(x); // TS knows x is number, so this is ok
x = "test"; // x is string
x.length; // TS knows y is a string, so this is ok

// Works with arrays too
let arr = []; // arr is any[]
arr.push(1);
console.log(arr); // number[]
arr.push("test");
console.log(arr); // (number | string)[]

function range(start: number, limit: number) {
  const out = []; // Type is any[]
  for (let i = start; i < limit; i++) {
    out.push(i); // Type of out is any[]
  }
  return out; // Type is number[]
}
