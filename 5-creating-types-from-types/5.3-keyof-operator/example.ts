// Problem: You have an object. You want to create a union of all the keys in an object type.
type Person = { name: string; age: number };

// Solution: keyof. keyof produces a string or numeric literal union of the keys of an object type.
type PersonKey = keyof Person;
// ^ "name" | "age"

const key: PersonKey = "name"; // fails if not "name" or "age". And if Person changes, this type changes too.

// Returns number if the key is a number
type MedalWinners = { [place: number]: string };
type Place = keyof MedalWinners;

interface Themes {
  default: {
    background: string;
    color: string;
  };
  dark: {
    background: string;
    color: string;
  };
  light: {
    background: string;
    color: string;
  };
  highContrast: {
    background: string;
    color: string;
  };
}

type Theme = keyof Themes;
// ^ "default" | "dark" | "light" | "highContrast"
