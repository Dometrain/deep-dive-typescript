// Arrays
import { z } from "zod";

const stringArray = z.array(z.string());

// equivalent
const stringArray2 = z.string().array();
