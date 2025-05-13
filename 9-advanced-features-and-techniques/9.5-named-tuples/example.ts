// Named tuples label a tuple's elements.
type Location = [lat: number, long: number];

// Hover Location type to see the labels
const nyc: Location = [40.7128, -74.006]; // New York City

function logLocation(location: Location) {
  const nycLat = nyc[0]; // Hover indexes to see labels.
  console.log(`Lat: ${location[0]}, Long: ${location[1]}`);
}

// Unfortunately, no autocomplete hints for the labels though.
logLocation([40.7128, -74.006]); // New York City
