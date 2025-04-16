// Read "extends" as "is assignable to" or "is a subtype of"
type IsNumber<T> = T extends number ? true : false;

type Test1 = IsNumber<4>; // true
type Test2 = IsNumber<"Hi">; // false
