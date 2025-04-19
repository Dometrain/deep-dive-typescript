import { vehicleSchema } from "./vehicle";

async function renderVehicles() {
  const resp = await fetch("http://localhost:3001/vehicles");
  if (!resp.ok) throw new Error("Failed to fetch vehicles");
  const vehicles = vehicleSchema.array().parse(resp.json());
  const list = document.createElement("ul");
  vehicles.forEach((v) => {
    const vehicleItem = document.createElement("li");
    vehicleItem.textContent = `${v.year} ${v.make} ${v.model}`;
    list.appendChild(vehicleItem);
  });
  document.getElementById("app")!.innerHTML = list.outerHTML;
}

renderVehicles();
