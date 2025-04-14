type Color = "red" | "green" | "blue";

type NotRed = Exclude<Color, "red">; // 'green' | 'blue'
