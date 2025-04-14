// Multiple method decorators
function first<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  function replacementMethod(this: This, ...args: Args): Return {
    console.log("First decorator");
    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}

function second<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  function replacementMethod(this: This, ...args: Args): Return {
    console.log("Second decorator");
    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}

class MyClass {
  // Or, can layout on same line as method
  @first
  @second
  method() {}
}

new MyClass().method();
