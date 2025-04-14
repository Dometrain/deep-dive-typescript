# Zod

TypeScript doesn't exist at compile-time. So what if your app accepts input at runtime? How do you assure runtime data matches your expectations?

There are a variety of libraries that can validate runtime data, and generate corresponding TypeScript types. Some of the most popular ones are:

- Zod
- ArkType
- Yup
- io-ts
- Valibot
- Superstruct

In fact, there's a standard for this called [Standard Schema](https://github.com/standard-schema/standard-schema?tab=readme-ov-file#what-schema-libraries-implement-the-spec) that many of these libraries follow. This standard defines a common way to describe and validate data structures, making it easier to work with different libraries. [Many popular tools](https://github.com/standard-schema/standard-schema?tab=readme-ov-file#what-schema-libraries-implement-the-spec) can work with any library that follows this standard.

In this course, we'll use Zod. It's very popular and easy to use.

Zod is a TypeScript-first schema declaration and validation library. It ensures your data is correct at runtime.

Zod isn't part of TypeScript. It's a separate library. But it's designed to work well with TypeScript. It's a great way to ensure your data is correct at runtime.

## Installation

```bash
npm install zod
```

## Usage

```ts
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const user = userSchema.parse({
  name: "John Doe",
  age: 42,
});
```

Zod is helpful anytime you're dealing with runtime data. Examples include:

- API requests
- Form submissions
- Database queries
- Configuration files
- User input
- URL parameters
- JSON files

TypeScript has no idea what data will be at runtime. Zod helps you ensure that data is correct, at runtime.

## Features

Zod has many features, including:

- TypeScript-first design
- Type inference
- Schema composition
- Transformation
- Validation
- Detailed error messages
