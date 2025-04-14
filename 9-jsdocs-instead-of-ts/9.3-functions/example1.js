// Parameters can be declared in many ways
/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Google Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} A string result. Can use returns instead.
 */
function example(p1, p2, p3, p4) {
  return `${p1} ${p2} ${p3} ${p4}`;
}
