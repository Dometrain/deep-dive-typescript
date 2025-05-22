// Type narrowing via exhaustiveness checking
interface Dog {
  kind: "dog";
  favoriteToy: string;
}

interface Parrot {
  kind: "parrot";
  knowsWords: number;
}

type Pet = Dog | Parrot;

function logPetTalent(pet: Pet) {
  switch (pet.kind) {
    case "dog":
      return console.log(`Dog loves ${pet.favoriteToy}.`);
    case "parrot":
      return console.log(`Parrot knows ${pet.knowsWords} words.`);
    default:
      pet satisfies never; // error if we don't handle all cases
  }
}
