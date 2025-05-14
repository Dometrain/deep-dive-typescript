# Symbols in TypeScript

JavaScript has a primitive data type called `symbol`. It is used to create unique identifiers for object properties. Symbols are often used to avoid name clashes in object properties, especially when working with libraries or frameworks that may add properties to objects.

In TypeScript, you can use symbols in the same way as in JavaScript. You can create a symbol using the `Symbol` function, and you can use it as a key for object properties.

## Creating Symbols

You can create a symbol using the `Symbol` function. Each time you call `Symbol()`, it creates a new, unique symbol.

```typescript
const mySymbol1 = Symbol("description1");
```
