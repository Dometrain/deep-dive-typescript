class Boat {
  floats = true;
}

class Car {
  rolls = true;
}

function instanceOfExample(x: Boat | Car) {
  if (x instanceof Boat) {
    x.floats;
  } else {
    x.rolls;
  }
}
