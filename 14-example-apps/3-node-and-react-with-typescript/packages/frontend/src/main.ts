import { renderContact } from "./routes/contact.js";
import { renderVehicleDetails } from "./routes/vehicleDetails.js";
import { renderVehicles } from "./routes/vehicles.js";
import "./style.css";

async function renderRoute() {
  switch (window.location.pathname) {
    case "/":
      return renderVehicles();

    case "/vehicle/":
      const vehicleId = parseInt(window.location.pathname.split("/")[2]);
      return renderVehicleDetails(vehicleId);

    case "/contact":
      return renderContact();

    default:
      console.error("Unknown path", window.location.pathname);
  }
}

renderRoute();
