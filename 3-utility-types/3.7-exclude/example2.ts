// Excluding multiple items

type Color = "red" | "green" | "blue" | "yellow" | "purple";
type StoplightColors = Exclude<Color, "purple" | "blue">; // 'red' | 'green' | 'blue'
