type Units = "px" | "rem" | "em" | "%";

type Spacing = `${number}${Units}`;

const spacing: Spacing = "124px"; // OK
// const spacing2: Spacing = "124"; // Type '"124"' is not assignable to type '`${number}px` | `${number}rem` | `${number}em` | `${number}%`'
