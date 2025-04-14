/**
 * @template T
 * @param {T} x - A generic param that flows through to the return type
 * @returns {T}
 */
function example(x) {
  return x;
}

// Hover each to see the return type
const a = example("string");
const b = example(1);
const c = example({});
