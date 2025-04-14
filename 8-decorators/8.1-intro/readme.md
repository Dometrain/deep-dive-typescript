# Decorators

Decorators are a way to handle metaprogramming in TypeScript. They're similar to C# attributes, Java annotations, and Python decorators.

TypeScript decorators are a confusing topic because there are two implementations:

1. Experimental stage 2 decorators, outlined here: https://www.typescriptlang.org/docs/handbook/decorators.html. Experimental decorator support was added to TypeScript in 2015, but still to this day remains an unstable feature.
2. Stage 3 decorators added in TS 5.0, outlined here: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators. It is enabled by default.

JavaScript decorators are a stage 3 ECMAScript proposal, which means they'll hopefully be final and stable soon. As of TypeScript 5.0, the stage 3 proposal is the default implementation. The old stage 2 experimental decorators are still available via a tsconfig setting called `experimentalDecorators`, but they're not recommended for use in new code - it's considered legacy now. So, in this course, we're going to focus solely on the new stage 3 decorators added in TypeScript 5.0.

Stage 3 decorators are expected to soon be a stable JavaScript feature. For the current status, see

Note: Bun doesn't support decorators - it ignores them. So, we need to compile the file via `tsc` first.

# What's a decorator?

A decorator is a keyword that starts with an @ symbol and can be put in front of classes and class members like properties/fields, getters, setters, and auto-accessors. Decorators are functions that can be called on classes, class elements, or other JavaScript syntax forms during definition. They can:

- Modify the behavior of a class, method, accessor, or property
- Add new functionality to a class or method
- Provide metadata for a construct
- Enforce coding standards
- Replace or initialize a decorated value
- Validate, log, or transform a decorated value

In summary, metaprogramming (programming the program).

When decorators are called, they receive two parameters:

1. The decorated value, or `undefined` for class fields.
2. A context object containing information about the decorated value, such as its name, type, and the class it belongs to.

# Who are decorators for?

Decorators are for libraries and frameworks that want to provide a way to extend or modify the behavior of classes and class members. They allow developers to create reusable code that can be applied to different classes and class members without modifying the original code. They're primarily implemented by library authors. Library consumers can use decorators to add functionality to their classes and class members without having to modify the original code. Since decorators are used with classes, they're primarily an OO feature. Open source JS libraries like Angular and NestJS use decorators.

# Why Not Decorators?

- Not stable yet (stage 3)
- Generate a lot of code
- Can be hard to type
- Can make it harder to understand the program's flow - may introduce side effects and dependencies that are not immediately visible.
- Can make it harder to test and debug code, as they can obscure the original structure and behavior of the decorated values.
- Can lead to performance issues, as decorators add overhead
- Can make it harder to reason about the code, as decorators
