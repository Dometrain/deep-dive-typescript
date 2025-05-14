Summary: 6 ways to brand a type

```ts
// Option 1: __brand
type Meter = number & { __brand: "meter" };

// Option 2: Pick a property related to the domain
type Meter = number & { unitOfMeasure: "meter" };

// Option 3: unique symbol
declare const meterSymbol: unique symbol;
type Meter = number & { [meterSymbol]: void };

// Option 4: ts-brand library
import { Brand } from "ts-brand";
type Meter = Brand<number, "meter">;

// Option 5: Zod library
import * as z from "zod";
const Meter = z.number().brand<"Meter">();
```
