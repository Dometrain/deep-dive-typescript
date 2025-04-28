# Non-null assertion

Sometimes you know that a value is not null or undefined, but TypeScript cannot infer that. In such cases, you can use the non-null assertion operator (`!`) to tell TypeScript the value isn't null or undefined.

This is useful in scenarios where you are working with third-party libraries or APIs that may return null or undefined values, but you know that in your specific use case, the value will always be present.

## Example

```typescript
const element = document.getElementById("my-element");
// TypeScript infers that element could be null
// Use non-null assertion to tell TypeScript that it won't be null
element!.innerHTML = "Hello, World!";
```

In this example, `document.getElementById` may return `null` if the element with the specified ID does not exist. However, if you are certain that the element exists in your HTML, you can use the non-null assertion operator (`!`) to inform TypeScript that `element` will not be `null`. This allows you to safely access properties or methods on `element` without TypeScript raising an error.

## Important Note

While the non-null assertion operator can be useful, it should be used with caution. Overusing it can lead to runtime errors if you are wrong about the value being non-null. It's generally better to use type guards or other techniques to ensure that values are indeed not null or undefined whenever possible.

Also, prefer a non-null assertion over using a type assertion (e.g., `element as HTMLElement`). A non-null assertion merely removes `null` or `undefined` from the type. A type assertion basically disables TypeScript. It's saying "trust me, I know better" and can lead to bugs if the type you assert is incorrect.

For example, if you use a non-null assertion on a value that is actually `null` or `undefined`, it will lead to a runtime error when you try to access properties or methods on it.

```typescript
const element = document.getElementById("my-element")!;
// If the element does not exist, this will throw a runtime error
element.innerHTML = "Hello, World!"; // Error: Cannot read properties of null (reading 'innerHTML')
```

In this case, if the element with ID "my-element" does not exist in the DOM, the code will throw a runtime error when trying to access `innerHTML`.

But the risk with a type assertion is even greater because you may assert a type that is incorrect or needlessly wide:

```typescript
// Oops! Type assertion needlessly widens the type from `HTMLAnchorElement` to `HTMLElement`
const element = document.querySelector("a") as HTMLElement;
element.innerHTML = "test";
```

In summary, a null assertion is safer because it only removes `null` and `undefined` from the type, while a type assertion can lead to more severe issues if the asserted type is incorrect. Always prefer using non-null assertions when you are sure about the value being non-null or undefined, and use type assertions sparingly and carefully.
