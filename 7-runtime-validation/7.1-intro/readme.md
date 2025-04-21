# Zod

TypeScript doesn't exist at runtime. So how we assure runtime data is compatible with our types?

For that, we can use a runtime validation library. Three of the most popular are:

- Zod
- ArkType
- Valibot

In fact, there's a standard for this called [Standard Schema](https://github.com/standard-schema/standard-schema?tab=readme-ov-file#what-schema-libraries-implement-the-spec) that these libraries follow. This standard defines a common way to describe and validate data structures, making it easier to work with different libraries. [Many popular tools](https://github.com/standard-schema/standard-schema?tab=readme-ov-file#what-schema-libraries-implement-the-spec) can work with any library that follows this standard.

We'll use Zod. It's popular and easy to use.

Zod is a TypeScript-first schema declaration and validation library. It ensures your data is correct at runtime, and we can generate TypeScript types from it too.

Zod isn't part of TypeScript. It's a separate library. But it's designed to work well with TypeScript. It's a great way to ensure your data is correct at runtime, and I find it's so essential that I use it in all my TypeScript projects.

## Installation

```bash
npm install zod
```

## Usage

```ts
import * as z from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const user = userSchema.parse({
  name: "John Doe",
  age: 42,
});
```

Zod is helpful anytime you want to validate runtime data such as:

- API responses
- Form submissions
- Database queries
- Config files
- Environment variables
- User input
- URL parameters
- JSON files

TypeScript has no idea what all this data will be at runtime. Zod ensures the data is correct, at runtime.

## Features

Zod has many features, including:

- TypeScript-first design
- Type inference
- Schema composition
- Transformation
- Validation
- Detailed error messages
