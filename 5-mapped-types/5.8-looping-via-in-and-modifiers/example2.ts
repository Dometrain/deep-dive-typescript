// Goal: Create a new type like this, but with all properties set to boolean
type Features = {
  updatePhoto: () => void;
  editProfile: () => void;
};

// Type mapper
type BooleanProperties<Type> = {
  [Property in keyof Type]: boolean;
};

// Mapped type
type FeatureToggles = BooleanProperties<Features>;
