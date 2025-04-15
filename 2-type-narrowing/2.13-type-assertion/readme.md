# Type Narrowing via Type Assertions

I've deliberately saved this approach for last, because it's a last resort.

Problem: You know more than TypeScript. TypeScript can't tell precisely what the type should be, so you want to assert what the type is.

Solution: Use the `as` operator to assert a type. This is called a type assertion.

```ts
const input = document.getElementById("my-input") as HTMLInputElement;
input.value = "Hello World!";
```

After the type assertion, I can use `input` as an `HTMLInputElement`, and get autocomplete support for HTMLInputElement's properties.

Without the type assertion, `input` would be of type `HTMLElement`, and I would not get autocomplete support for HTMLInputElement's properties.

But keep in mind, this isn't safe. I could assert that it's anything. If I assert it's an HTMLTableElement, TypeScript will trust me and show me autocomplete for HTMLTableElement's properties.

Try to avoid using type assertions, since it's fundamentally unsafe. A type assertion disables type checking. It's basically saying "trust me TypeScript, I'm right". It disables type checks, so it doesn't guarantee that the type is correct, and you can lead to runtime bugs.

Think of a type assertion as a last resort. Only consider it when there's no other way to convey to TypeScript what the type should be.

That's why my this example is a good use case for type assertions. I'm asserting that the element is an HTMLInputElement, and I'm using it as an HTMLInputElement. TypeScript can't know what the element is, so I'm asserting it.

Another common use case is when receiving data from outside the app. For example, when fetching data from an API, you might know the expected shape of the data, but TypeScript doesn't have any way of knowing what an HTTP call will return. In that case, you can assert the type of the data.

```ts
// A common use case for type assertion is when working with JSON data fetched from an API.
interface User {
  id: number;
  name: string;
}

async function getUserById(id: number) {
  const resp = await fetch("http://example.com/user/" + id);
  return resp.json() as Promise<User>; // Assert that the response json is of type `User`.
}
```

Finally, there's an alternative syntax you can use for type assertions. Instead of using `as`, you can use angle brackets `<>`.

```ts
// Alternative syntax using angle brackets (this doesn't work in .tsx files, due to syntax conflict with JSX)
const name: any = "Cory";
const nameString = <string>name;
```

However, prefer `as` since angle brackets can conflict with JSX syntax if you're working with libraries like React that use JSX.
