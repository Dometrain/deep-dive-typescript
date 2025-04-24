// Risk: Structural types mean you may accidentally pass the wrong type to a function.
type Cat = { name: string };
type Dog = { name: string };

const petCat = (cat: Cat) => {};
const dog: Dog = { name: "spot" };
petCat(dog); // Works. Ideally would get a type error.
