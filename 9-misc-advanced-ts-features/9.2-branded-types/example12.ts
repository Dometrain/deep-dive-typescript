import * as z from "zod";

const Cat = z.object({ name: z.string() }).brand<"Cat">();
type Cat = z.infer<typeof Cat>;

const petCat = (_cat: Cat) => {};

// this works
const myCat = Cat.parse({ name: "simba" });
petCat(myCat);

// this doesn't
// petCat({ name: "fido" });

// To see this work:  tsc example12.ts --target es2022 --moduleResolution nodenext --module nodenext
// Need to include these configs since tsconfig is ignored when a single file is compiled.
