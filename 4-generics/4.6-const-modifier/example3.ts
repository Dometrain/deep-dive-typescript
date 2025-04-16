// Returns a function that takes a name and returns their title.
function parseNames<T extends { name: string; title: string }>(names: T[]) {
  return (name: T["name"]) => names.find((n) => n.name === name)?.title;
}

const getTitleByName = parseNames([
  {
    name: "Cory",
    title: "Author",
  },
  {
    name: "Anne",
    title: "Editor",
  },
]);

// Note autocomplete support when using const modifier
const title = getTitleByName("Cory");
