// Class Decorator Factory
function coloredCar(color: string = "Red") {
  return function ClassDecorator<C extends new (...args: any[]) => any>(
    target: C,
    ctx: ClassDecoratorContext
  ) {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        console.log(`Called ${ctx.name} constructor`);
        this.color = color;
      }
    };
  };
}

// Can apply before the export, and omit arg so the default applies...
@coloredCar()
export class SportsCar {
  constructor(
    private model: string,
    private doors = 2,
    private color?: string
  ) {}

  toString(): string {
    return `${this.color} ${this.doors}-door ${this.model} sports car`;
  }
}

// ...or after the export, and pass an arg
export
@coloredCar("Blue")
class Sedan {
  constructor(
    private model: string,
    private doors = 4,
    private color?: string
  ) {}

  toString(): string {
    return `${this.color} ${this.doors}-door ${this.model} sedan`;
  }
}

const firstCar = new Sedan("Toyota Camry");
const secondCar = new SportsCar("Ferrari F8");

console.info(firstCar.toString());
console.info(secondCar.toString());
