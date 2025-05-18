import { getVehicle } from "../api/vehicleApi.js";

export async function renderVehicleDetails(vehicleId: number) {
  const { year, make, model, miles, price } = await getVehicle(vehicleId);
  const vehicle = document.createElement("p");
  vehicle.innerHTML = `
    <h1>${year} ${make} ${model}</h1>
    <p>${miles} miles</p>
    <p>Price: $${price}</p>`;
  document.getElementById("app")!.innerHTML = vehicle.outerHTML;
}
