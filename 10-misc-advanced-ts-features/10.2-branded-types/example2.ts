// Can optionally use assertion function to centralize validation logic for validating at runtime.

declare const age: unique symbol;

type Age = number & { [age]: void };

function assertAge(value: number): asserts value is Age {
  if (value < 0) throw new Error("age must be a positive number");
}

function toAge(age: number): Age {
  assertAge(age);
  return age as Age;
}

function addAges(a: Age, b: Age): Age {
  return (a + b) as Age;
}

// addAges(1, 2); // error, 1 is a number instead of type Age

const child = toAge(1);
const teen = toAge(13);
addAges(child, teen); // OK
