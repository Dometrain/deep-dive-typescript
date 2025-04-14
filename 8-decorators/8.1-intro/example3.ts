// Can import a decorator from another file. Auto-import works like regular methods too.
import { log } from "../log";

class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  @log
  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

const p = new Person("Cory");
p.greet();
