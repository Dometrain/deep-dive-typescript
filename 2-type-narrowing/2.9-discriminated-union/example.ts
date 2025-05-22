// type narrowing via discriminated union
interface Cat {
  kind: "cat";
  livesLeft: number;
}

interface Dog {
  kind: "dog";
  bonesBuried: number;
}

type Pet = Cat | Dog;

function describePet(pet: Pet) {
  switch (pet.kind) {
    case "cat":
      return `This cat has ${pet.livesLeft} lives left.`;
    case "dog":
      return `This dog has buried ${pet.bonesBuried} bones.`;
  }
}
