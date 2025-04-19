import { vehicleSchema, type NewVehicle } from "../../../types/vehicle.js";

export async function getVehicles() {
  const resp = await fetch("http://localhost:3001/vehicles");
  if (!resp.ok) throw new Error(resp.statusText);
  return vehicleSchema.array().parse(await resp.json());
}

export async function getVehicle(vehicleId: number) {
  const resp = await fetch("http://localhost:3001/vehicle/" + vehicleId);
  if (!resp.ok) throw new Error(resp.statusText);
  return vehicleSchema.parse(await resp.json());
}

export async function addVehicle(newVehicle: NewVehicle) {
  const resp = await fetch("http://localhost:3001/vehicle/", {
    method: "POST",
    body: JSON.stringify(newVehicle),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) throw new Error(resp.statusText);
  return resp.json();
}
