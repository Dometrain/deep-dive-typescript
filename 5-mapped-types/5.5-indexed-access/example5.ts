// Can get a union of unique object values using indexed access too

const theme = {
  light: "#fff",
  dark: "#000",
  // dark2: "#000", // If uncommented, `ThemeColor` union below still only includes unique values
} as const;

type Theme = keyof typeof theme; // "light" | "dark"

// `string` if `as const` isn't used above
type ThemeColor = (typeof theme)[Theme]; // "#fff" | "#000"
