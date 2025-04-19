import { Database } from "bun:sqlite";
import { newVehicleSchema } from "../types/vehicle";
const db = new Database("db.sqlite");

Bun.serve({
  port: 3001,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/vehicles") {
      const vehicles = db.query("SELECT * FROM vehicle").all();
      return new Response(JSON.stringify(vehicles), CORS_HEADERS);
    }

    if (path.startsWith("/vehicle/")) {
      switch (req.method) {
        case "OPTIONS":
          return new Response(null, CORS_HEADERS);
        case "GET": {
          const id = parseInt(path.split("/")[2]);
          const vehicle = db
            .query("SELECT * FROM vehicle WHERE id = $id")
            .get({ $id: id });
          return new Response(JSON.stringify(vehicle), CORS_HEADERS);
        }
        case "POST": {
          const newVehicle = newVehicleSchema.parse(await req.json());
          const query = db.query(
            "INSERT INTO Vehicle (make, model, year, miles, price) VALUES ($make, $model, $year, $miles, $price)"
          );
          const result = query.run({
            $make: newVehicle.make,
            $model: newVehicle.model,
            $year: newVehicle.year,
            $miles: newVehicle.miles,
            $price: newVehicle.price,
          });
          return new Response(result.lastInsertRowid.toString(), CORS_HEADERS);
        }
      }
    }

    return new Response("404!");
  },
});

console.log(`[server]: Server running at http://localhost:3001`);

const CORS_HEADERS = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE, PATCH",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
};
