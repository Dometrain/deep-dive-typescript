# Intro

Problem: You'd like you use type-checking in your JavaScript code, but you want to stick with plain JS files so you don't have to compile your code before you run it in the browser.

Solution: Use JSDoc comments to declare types instead.

For example, imagine I have a plain JS file like this:

```js
function add(a, b) {
  return a + b;
}
```

I can add JSDocs to declare the types of `a` and `b`:

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

Now, if I use a tool like VSCode, it will show me type errors if I try to call `add` with non-numeric arguments. I also get autocomplete support and type hints in the editor, and I can see the types on hover.

So, you can think of this as an alternative TypeScript syntax that uses only comments. This is equivalent to the TypeScript code:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

JSDoc only uses comments so that it can be run in any JavaScript environment. The comments are just ignored by any JavaScript engine that doesn't understand them.

To check specific files, put a comment at the top of the file:

```js
// @ts-check
```

To check all files via VSCode:

```json
{
  "javascript.implicitProjectConfig.checkJs": true
}
```

If checkJs is true, put this comment at the top of the file to disable type checking in a single file:

```js
// @ts-nocheck
```

Some alternative JSDoc syntax is inspired by Google Closure.

# Tradeoffs

The downside of using JSDoc is that the syntax is more verbose than TypeScript, and it's not directly inline in the code, so it's a little harder to read. There are also multiple ways to declare types, which it can be confusing and lead to inconsistency.
