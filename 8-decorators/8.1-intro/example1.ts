class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    // This would get tedious to write in every method
    console.log("LOG: Entering method.");
    console.log(`Hello, my name is ${this.name}.`);
    console.log("LOG: Exiting method.");
  }
}
