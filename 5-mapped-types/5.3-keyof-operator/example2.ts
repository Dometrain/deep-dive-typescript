// Returns `number` if the key is a number
type MedalWinners = { [place: number]: string };

const medalWinners: MedalWinners = {
  1: "Alice",
  2: "Bob",
  3: "Charlie",
};

type Place = keyof MedalWinners;
