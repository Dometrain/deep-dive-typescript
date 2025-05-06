// ConstructorParameters utility type
class Coordinate {
  constructor(x: number, y: number) {}
}

type CoordinateConstructor = ConstructorParameters<typeof Coordinate>;
