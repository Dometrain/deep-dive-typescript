// Param supports similar syntax for complex types. Note repeated use of `options` prefix in the examples.

/**
 * @param {Object} options
 * @param {number} options.prop1 - required number
 * @param {number=} options.prop2 - optional
 * @param {number} [options.prop3] - optional alternative syntax
 * @param {number} [options.prop4=42] - optional with default
 */
function example(options) {
  return options.prop4 || 1001;
}

console.log(example({ prop1: 1 }));
