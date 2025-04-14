# Type Only Imports and Export

We briefly discussed type only imports in the getting started course.

Type-only imports are a way to explicitly import types. This can be useful in some edge cases, such as when you want to avoid importing unnecessary runtime dependencies or improve performance.

## `import type` Statements

Using `import type` explicitly tells TypeScript that the imported entity is for type purposes only. These imports are removed entirely from the compiled JavaScript, preventing unnecessary runtime dependencies.

**Example:**

```typescript
// input.ts
import type { MyType } from "./file";

or;

import { type MyType } from "./file";

const data: MyType = { id: 1 };
```

**Output (JavaScript):**

```javascript
// output.js
const data = { id: 1 }; // No import from './file'
```

---

## Compiler Options Impact

Some TypeScript compiler options influence whether type-only imports are required:

- **`--verbatimModuleSyntax`:**

  - When enabled, Type-only imports are required because TypeScript preserves the exact import syntax in the compiled output. With verbatimModuleSyntax set to false (the default), `tsc` automatically removes imports that only import types, and you aren't required to use `import type`. But, if you enable `verbatimModuleSyntax`, then `tsc` will require you to use `import type` to import a type. Why? Because `verbatimModuleSyntax` tells TypeScript to preserve the exact syntax of the module imports in the output JavaScript. The lone exception is type imports, since types don't exist at runtime. So, this means if you have `verbatimModuleSyntax` enabled, you must use `import type` to explicitly import types.

**Example with `--verbatimModuleSyntax: true`:**

With this setting true, the `type` keyword is required to import the type. The code below will not compile without the `type` keyword.

```typescript
// input.ts
import { type MyType } from "./file";

const data: MyType = { id: 1 };
```

**Output (JavaScript):**

```javascript
// output.js
const data = { id: 1 }; // The import is removed because it's only for a type.
```

---

## 4. Side Effect Imports

If no exports from a given import is used, it gets removed from the final bundle.

**Example:**

```typescript
// file.ts
console.log("Side effect!");

// input.ts
import type { MyType } from "./file";

const data: MyType = { id: 1 };
```

**Output (JavaScript):**

```javascript
// output.js
// Side effect removed from the output since only a type was imported.
const data = { id: 1 };
```

---

# When Type-Only Imports Are Useful

TypeScript's **type-only imports** (`import type { ... } from '...'`) may improve performance, ensure clarity, and prevent unnecessary runtime dependencies. Here are some specific examples:

---

## 1. Avoiding Runtime Imports

If you are importing only types from a module and those types are not used at runtime, a regular `import` can unnecessarily include the module in the transpiled JavaScript, increasing bundle size. Using `import type` ensures the module is ignored during runtime.

```typescript
// Type-only import
import type { User } from "./models";

// Define a function using the type
function greetUser(user: User): string {
  return `Hello, ${user.name}`;
}
```

**Compiled Output (JavaScript):**

```javascript
// No import statement for './models', as it's type-only
function greetUser(user) {
  return `Hello, ${user.name}`;
}
```

---

## 2. Preventing Circular Dependencies

When working on larger projects, circular dependencies can occur if modules depend on each other. Since `import type` doesn't create runtime dependencies, it helps break cycles caused by imports used only for type definitions.

**Example:**

```typescript
// A.ts
import type { B } from "./B";

export interface A {
  id: number;
  related: B;
}

// B.ts
import type { A } from "./A";

export interface B {
  id: number;
  related: A;
}
```

This structure avoids runtime dependency issues while preserving type relationships.

---

## 3. Optimizing Code Splitting

When using tools like Webpack, Vite, or Rollup, regular imports can cause entire modules to be bundled unnecessarily if only types are imported. `import type` ensures that type dependencies don't affect the final JavaScript bundle.

**Example:**

```typescript
// Regular import (may include the module in runtime bundle)
import { Component } from "react";

// Type-only import (no runtime dependency on React)
import type { Component } from "react";

// Example usage
type MyComponent = Component<{ prop: string }>;
```

---

## 4. Declaring Interfaces for External APIs

When working with APIs, you might import type definitions from a shared library or API schema but don’t need the runtime module.

```typescript
import type { UserProfile } from "api-types";

async function fetchUserProfile(userId: string): Promise<UserProfile> {
  const response = await fetch(`/api/user/${userId}`);
  return response.json() as UserProfile;
}
```

This avoids bundling unnecessary code from `api-types` into your project.

---

## Summary

**Type-only imports** are valuable for:

- Enhancing clarity in type usage.
- Reducing runtime bundle size.
- Preventing circular dependencies.

## Type only export

Type-only exports are similar to type-only imports, but they are used to explicitly export only types from a module.

This can be useful when you want to ensure that a module only exports types and does not include any runtime code.

**Example:**

```ts
interface Address {
  city: string;
  country: Country;
}

type Country = "USA" | "UK" | "Canada" | "Mexico";

// Type only export, or could export each separately above
export type { Address, Country };
```
