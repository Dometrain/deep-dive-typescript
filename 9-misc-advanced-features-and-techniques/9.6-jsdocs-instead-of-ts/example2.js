// Primitive
/** @type {string} */
let s;

// 3 ways to define an array
/** @type {number[]} */
let array1;
/** @type {Array.<number>} */
let array2;
/** @type {Array<number>} */
let array3;

// Object literal
/** @type {{ a: string, b: number }} */
let user;

/** @type {HTMLElement | null} */
let myElement = document.querySelector("#myElement");

// Map
/** @type {Object.<string, number>} */
let stringToNumberMap;

// Array-like
/** @type {Object.<number, object>} */
let arrayLikeObject;

// 4 ways to type a function
/** @type Function */
var fn1;
/** @type function */
var fn2;
/** @type {(a: string, b: boolean) => number} */
var fn3;
/** @type {function(string, boolean): number} */
var fn4;

// 2 ways to type as any
/** @type {*} */
var any1;
/** @type {?} */
var any2;

// Union
/** @type {string | number} */
let numOrString = Math.random() < 0.5 ? "hi" : 1;

// Casting
/** @type {number | string} */
var typeAssertedNumber = /** @type {number} */ (numOrString);

// Synonyms - All these do the same thing.

// String -> string
// Number -> number
// Boolean -> boolean
// Void -> void
// Undefined -> undefined
// Null -> null
// Function -> function
// array -> Array<any>
// promise -> Promise<any>
// Object -> any
// object -> any
