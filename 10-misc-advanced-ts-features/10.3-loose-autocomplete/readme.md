# Loose Autocomplete

Problem: Imagine you want to provide helpful autocomplete support for common values, but also allow the developer to enter any string. To do this, you can use an interesting trick that provides loose autocomplete.

First, declare a union of common values and an empty object. Then, add the `string` type to the union. This allows you to provide autocomplete support for the common values, but also allows any string.

```ts
type LooseAutocomplete = "value1" | "value2" | "value3" | (string & {});

const value: LooseAutocomplete = "value1";
```
