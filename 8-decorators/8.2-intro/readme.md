# Why decorators?

Decorators are useful for cross-cutting concerns. Cross-cutting concerns are aspects of a program that affect multiple modules or layers of the application. So, when you find you want to apply some logic or enhancements in many spots, decorators can help.

They are often related to functionality that is not part of the main business logic but is still important like

- Logging
- Error handling
- Security
- Caching
- Validation
- Performance monitoring
- Transaction management

# Who are decorators for?

Decorators allow developers to create reusable code that can be applied to different classes and class members without modifying the original code. They're primarily implemented by library authors. Library consumers can use decorators to add functionality to their classes and class members without having to modify the original code. Since decorators are used with classes, they're an OO feature. Popular open source JS libraries like Angular and NestJS use decorators.
