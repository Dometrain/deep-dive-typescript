// Named tuples are a way to give names to the elements of a tuple.
// TODO: Supposed to have to specify name for all per docs, but omitting one seems to compile...
type UserTuple = [name: string, age: number, boolean];

// And not seeing any benefits here:
const user: UserTuple = ["Alice", 30, "true"];
