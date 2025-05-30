// Arrays
import * as z from "zod";

const stringArray = z.array(z.string());

// equivalent
const stringArray2 = z.string().array();

type TodoList = z.infer<typeof stringArray>;
