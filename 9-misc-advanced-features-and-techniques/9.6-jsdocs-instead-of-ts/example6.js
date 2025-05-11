// Can use plain TS syntax too

/** @typedef {{ id: number, name: string, age?: number }} User */
/** @typedef {(data: string, index?: number) => boolean}  */

let customer = /** @type {User} */ ({
  id: 1,
  name: "test",
});
