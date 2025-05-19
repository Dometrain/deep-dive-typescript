## Run example

```ts
tsc
bunx serve
```

This starts a local webserver.

To see the full map of HTML tags to TS types, ctrl+click on any `HTMLElement` or subtype in your IDE. This will show you the full hierarchy of types and their properties in lib.dom.d.ts. The file is giant because it contains types for all DOM APIs. Search for `HTMLElementTagNameMap` to see the associated TypeScript types for all DOM elements.

# Working with the DOM

TypeScript ships with types for working with the browser's DOM, but it can be tricky to use them correctly. The DOM API is not type-safe, and TypeScript's type system doesn't always catch errors when you manipulate the DOM.

## Problem

You want to manipulate the DOM using TypeScript, but you run into type errors or unexpected behavior.

## Solution

Use type assertions and utility types to work with the DOM safely and effectively.

## Example

Here's an example of how to manipulate the DOM using TypeScript:

```typescript
// TS doesn't know what the query will resolve to, so must use type assertion
// to tell it that the element will be an HTMLButtonElement
const button = document.getElementById("change-text") as HTMLButtonElement;

button.addEventListener("click", () => {
  const textElement = document.getElementById("text-container");
  if (textElement) {
    textElement.innerHTML = "Changed text";
  }
});
```

Alternatively, you can use a type guard to check the element's type before manipulating it:

```ts
const textElement = document.getElementById("text-container");
if (textElement instanceof HTMLElement) {
  textElement.innerHTML = "Changed text";
}
```
