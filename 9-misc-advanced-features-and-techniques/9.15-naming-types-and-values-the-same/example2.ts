// Imports both the type and the value of SportsTeam :O
import { SportsTeam } from "./example1";

function getTeamName(team: SportsTeam): string {
  return team.name;
}

getTeamName(SportsTeam); // "Warriors"

const team = SportsTeam as SportsTeam; // Value on left, type on right
