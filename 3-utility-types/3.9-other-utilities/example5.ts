// ThisType - Marker for a contextual `this` type
// Useful to specify `this` with object literals
// Avoids repeatedly specifying `this` in function signatures

type Math = {
  double: () => number;
  triple: () => number;
};

// ThisType avoids repeatedly specifying `this` in function signatures below
const math: Math & ThisType<{ value: number }> = {
  double() {
    return this.value * 2;
  },
  triple() {
    return this.value * 3;
  },
};

// Implementation
const obj = {
  value: 5,
  ...math,
};

console.log(obj.double()); // 10
// console.log(double());
