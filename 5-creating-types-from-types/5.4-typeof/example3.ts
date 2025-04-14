// Get function return type
function getCoordinates() {
  return { x: 10, y: 3 };
}
type Coordinates = ReturnType<typeof getCoordinates>; // typeof necessary because ReturnType accepts a type, not a value
// ^ type Coordinates = { x: number, y: number }
