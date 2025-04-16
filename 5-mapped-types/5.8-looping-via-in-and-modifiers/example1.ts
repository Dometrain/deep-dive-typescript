// Create a new type based on an existing type with all properties set to boolean

// Type mapper
type BooleanProperties<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// Mapped type
type FeatureOptions = BooleanProperties<Features>;
// ^ type FeatureOptions = { darkMode: boolean, newUserProfile: boolean }
