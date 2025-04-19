import { z } from "zod";

export const vehicleSchema = z.object({
  id: z.number(),
  year: z.coerce.number().min(1900).max(2100),
  make: z.string().min(1),
  model: z.string().min(1),
  miles: z.coerce.number().positive(),
  price: z.coerce.number().positive(),
});

export const newVehicleSchema = vehicleSchema.omit({ id: true });

export type Vehicle = z.infer<typeof vehicleSchema>;
export type NewVehicle = z.infer<typeof newVehicleSchema>;
