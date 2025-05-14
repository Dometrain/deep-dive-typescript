# Intro

Problem: You'd like to have types in your plain JavaScript code.

Solution: Use JSDoc comments to declare types instead.

I hesitate to even mention this feature, since I don't generally recommend it, but it's important you at least know it exits.

You can use JSDoc comments to add type annotations to your JavaScript code. This is a way to get some of the benefits of TypeScript in plain .js files.

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

So why do this? Well, JSDoc only uses comments so that it can be run in any JavaScript environment. The comments are just ignored by any JavaScript engine that doesn't understand them. So the benefit is your files stay plain JS, so you don't have to compile your code before you run it.

For example, imagine I have a plain JS file like this:

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

The advantage of JSDoc is you're writing plain JS, so you don't have to compile your code. It runs anywhere. This can speed up your CI build and save you time waiting for TypeScript to compile.

However, these days, there are many runtimes that support TypeScript natively, like Deno, Bun, and modern Node. So in many cases, you don't need to compile your TypeScript to run it. You can just let your editor check types as you code.

The other downside of using JSDoc is that the syntax is more verbose than TypeScript, and it's not directly inline in the code, so it's harder to read. There are also multiple ways to declare types, which it can be confusing and lead to inconsistency.
