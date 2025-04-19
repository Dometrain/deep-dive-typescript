# Generating or Inferring Types

If you have a REST or GraphQL API, creating TypeScript types can be a tedious task. The good news is, you may not need to create your types manually. You can generate types via tools.

Here's a few to consider:

## Database-to-TypeScript Tools

These tools generate TypeScript types from schemas, migrations, or DB introspection:

- Prisma – schema-first, generates full types and client
- Drizzle – SQL-like fluent schema, TS-native, typed queries
- Supabase – auto-generates types from PostgreSQL (via supabase gen types)
- Kysely – type-safe SQL builder; you provide the types, or generate them manually
- pgtyped – parses SQL queries and generates types using static analysis
- Zapatos – introspects PostgreSQL and generates fully typed query methods

## API-to-TypeScript Tools

If you have a REST or GraphQL API, there are several tools that can generate TypeScript types from your API definition such as OpenAPI or a GraphQL schema. This can save you a lot of time and ensure that your types are always in sync with your API.

- Swagger
- OpenAPI Generator
- GraphQL Codegen
- Apollo Codegen

## Schema Validation-to-Types

If you’re defining schemas with runtime validation tools, you can infer types from the schemas. We used Zod, but other libraries support this pattern:

- ArkType
- Valibot
- Yup
- io-ts
- Superstruct

This isn't an exhaustive list, but the point is, try to avoid manually creating types when possible. Use tools that can generate types for you based on your schema or API definition. This will save you time, and help ensure your types are accurate.

## Prisma

Prisma is an ORM tool that generates TypeScript types based on your database schema. It provides a type-safe way to interact with your DB and ensures that your queries are type-checked at compile time. You get excellent autocomplete support as you write your queries too. Prisma generates types for your models, queries, and mutations.

## Supabase

If you use Supabase to host your database, it can generate TypeScript types for your database schema via a CLI. This means you can use the generated types in your client code to ensure type safety when interacting with your Supabase database.

## Open API with Swagger Codegen or OpenAPI Generator

Open API is a spec for defining RESTful APIs. It allows you to describe your API endpoints, request and response types, and auth methods in a standardized format. Tools like Swagger Codegen or OpenAPI Generator can generate TypeScript types from your Open API spec. This ensures your types are in sync with your API and provides a type-safe way to interact with your API.

## GraphQL Codegen or Apollo

If you're using GraphQL, then GraphQL Codegen and Apollo are two projects that generate TypeScript types from your GraphQL schema and queries. So you don't have to write types manually, and you know your types are always in sync with your GraphQL API. These tools can generate types for queries, mutations, and subscriptions.
