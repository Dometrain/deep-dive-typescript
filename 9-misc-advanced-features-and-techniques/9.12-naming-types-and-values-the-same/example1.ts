// Types and values can have the same name in TypeScript (but generally I'd avoid this)
export type SportsTeam = {
  name: string;
  city: string;
};

export const SportsTeam: SportsTeam = {
  name: "Warriors",
  city: "San Francisco",
};
