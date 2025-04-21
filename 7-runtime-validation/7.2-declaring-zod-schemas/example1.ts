import * as z from "zod";

// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty
z.undefined();
z.null();

// catch-all
z.any();
z.unknown();

// never
z.never();
