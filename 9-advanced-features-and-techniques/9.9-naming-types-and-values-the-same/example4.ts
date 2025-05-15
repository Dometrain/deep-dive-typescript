// Example: Enum alternative

// I'd prefer to call this `role` since it's a value, not a type.
export const Role = {
  Admin: "admin",
  User: "user",
  Guest: "guest",
} as const;

// Derive union from object
export type Role = (typeof Role)[keyof typeof Role];
