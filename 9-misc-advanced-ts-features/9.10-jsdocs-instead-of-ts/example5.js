// Declaring complex object type

/**
 * @typedef {Object} Car - creates a new type named 'Car'. Lowercase `object` works too.
 * @property {number} prop1 - required number
 * @property {number=} prop2 - optional
 * @prop {number} [prop3] - alternative optional syntax
 * @prop {number} [prop4=42] - optional with default
 */

/** @type {Car} */
let car = {
  prop1: 1,
};
