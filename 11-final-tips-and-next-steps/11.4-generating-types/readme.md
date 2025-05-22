# Generating or Inferring Types

Creating TypeScript types manually can be a lot of work. The good news is, you may not need to create your types manually. You can generate types via tools.

Here's a few options to consider:

## DB-to-TypeScript Tools

These tools generate TypeScript types from schemas, migrations, or Database introspection:

- Prisma – schema-first, generates full types and client from DB schema
- Drizzle – SQL-like fluent schema, TS-native, typed queries
- Supabase – auto-generates types from PostgreSQL (via supabase gen types)
- Kysely – type-safe SQL builder; you provide the types, or generate them manually
- TypeORM – schema-first, generates types from DB schema
- pgtyped – parses SQL queries and generates types using static analysis
- Zapatos – introspects PostgreSQL and generates fully typed query methods

## API-to-TypeScript Tools

If you have a REST or GraphQL API, there are several tools that can generate TypeScript types from your API definition such as OpenAPI or a GraphQL schema. This can save you a lot of time and ensure that your types are always in sync with your API.

- Swagger
- OpenAPI Generator
- GraphQL Codegen

## Schema Validation-to-Types

Finally, remember, if you’re defining runtime validation schemas, you can infer types from the schemas. We used Zod to do this, but other libraries support this pattern:

- ArkType
- Valibot

This isn't an exhaustive list of options, but the point is, try to avoid manually creating types when possible. Consider using tools that can generate types for you based on your schema or API definition. This will save you time, and help ensure your types are accurate.
