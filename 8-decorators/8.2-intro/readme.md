# Why decorators?

Decorators are useful for cross-cutting concerns. When you find you want to apply some logic or enhancements in many spots, decorators can help.

Cross-cutting concerns are aspects of a program that affect multiple modules or layers of the application. They are often related to functionality that is not part of the main business logic but is still important for the overall operation of the application. Examples of cross-cutting concerns include:

- Logging
- Error handling
- Security
- Caching
- Validation
- Performance monitoring
- Transaction management

# Who are decorators for?

Decorators extend or modify the behavior of classes and class members. They allow developers to create reusable code that can be applied to different classes and class members without modifying the original code. They're primarily implemented by library authors. Library consumers can use decorators to add functionality to their classes and class members without having to modify the original code. Since decorators are used with classes, they're primarily an OO feature. Open source JS libraries like Angular and NestJS use decorators.
