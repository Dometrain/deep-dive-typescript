// NonNullable - Exclude null and undefined from a union type
type IdOrNull = string | number | null;
type Id = NonNullable<IdOrNull>;
