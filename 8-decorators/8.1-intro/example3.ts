// Can import a decorator from another file.
import { log } from "../log";

class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  // Auto-import works like regular methods too.
  @log
  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

const p = new Person("Cory");
p.greet();
