import { newVehicleSchema, type Vehicle } from "../../../types/vehicle.js";
import { addVehicle, getVehicles } from "../api/vehicleApi.js";
import { zfd } from "zod-form-data";
import * as z from "zod";

export async function renderVehicles() {
  const vehicles = await getVehicles();
  const app = document.getElementById("app") as HTMLElement;
  app.innerHTML = `<h1>Vehicles</h1>`;
  app.appendChild(vehicleList(vehicles));
  app.appendChild(addVehicleForm());
}

function renderValidationErrors(errors: z.ZodIssue[]) {
  const app = document.getElementById("app") as HTMLElement;
  const errorList = document.createElement("ul");
  errorList.classList.add("error");
  errors.forEach((error) => {
    const errorItem = document.createElement("li");
    errorItem.textContent = error.path + ": " + error.message;
    errorList.appendChild(errorItem);
  });
  const errorHeading = document.createElement("h2");
  errorHeading.textContent = "Validation errors";
  errorHeading.classList.add("error");
  app.appendChild(errorHeading);
  app.appendChild(errorList);
}

function vehicleList(vehicles: Vehicle[]) {
  const list = document.createElement("ul");
  vehicles.forEach((v) => {
    const vehicleItem = document.createElement("li");
    vehicleItem.innerHTML = `<a href="/vehicle/${v.id}">${v.year} ${v.make} ${v.model}</a>`;
    list.appendChild(vehicleItem);
  });
  return list;
}

function addVehicleForm() {
  const form = document.createElement("form");
  form.action = "POST";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = zfd.formData(newVehicleSchema).safeParse(new FormData(form));
    if (!result.success) {
      renderValidationErrors(result.error.errors);
    } else {
      await addVehicle(result.data);
      form.reset();
      renderVehicles(); // render page to show new vehicle
    }
  });

  form.innerHTML = `
    <h2>Add Vehicle</h2>
    <label for="year">Year</label>
    <input type="number" name="year">
    <label for="make">Make</label>
    <input type="text" name="make">
    <label for="model">Model</label>
    <input type="text" name="model">
    <label for="price">Price</label>
    <input type="number" name="miles">
    <label for="miles">Miles</label>
    <input type="number" name="price">
    <input type="submit" value="Add" />
  `;
  return form;
}
