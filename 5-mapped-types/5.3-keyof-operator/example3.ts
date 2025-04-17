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

type Theme = keyof Themes; // "default" | "dark" | "light" | "highContrast"
