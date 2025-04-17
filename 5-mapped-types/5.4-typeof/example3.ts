// Get function return type
function getCoordinates() {
  return { x: 10, y: 3 };
}
// typeof necessary because ReturnType accepts a type, not a value
type Coordinates = ReturnType<typeof getCoordinates>; // { x: number, y: number }
