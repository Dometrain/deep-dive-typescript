// Exercise: Generic Interfaces in TypeScript

// 1. Create a generic interface named `KeyValuePair` that has two properties:
//    - `key` of type `K`
//    - `value` of type `V`

// 2. Create a function `printKeyValuePair` that takes a `KeyValuePair` as an argument
//    and logs the key and value to the console.

// 3. Use the `KeyValuePair` interface to create an object where the key is a string
//    and the value is a number. Pass this object to the `printKeyValuePair` function.

// 4. Create another object using the `KeyValuePair` interface where the key is a number
//    and the value is a boolean. Pass this object to the `printKeyValuePair` function.

// Write your code below:

// Answers:

// 1. Generic interface
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// 2. Function to print key-value pair
function printKeyValuePair<K, V>(pair: KeyValuePair<K, V>): void {
  console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}

// 3. Example with string key and number value
const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};
printKeyValuePair(stringNumberPair);

// 4. Example with number key and boolean value
const numberBooleanPair: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};
printKeyValuePair(numberBooleanPair);
