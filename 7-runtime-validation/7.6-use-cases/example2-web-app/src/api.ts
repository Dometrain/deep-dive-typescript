// Validating API response with Zod
import { z } from "zod";

const productsSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

type Product = z.infer<typeof productsSchema>;

async function getProducts(): Promise<Product[]> {
  const resp = await fetch("http://localhost:3001/products");
  const data = await resp.json();
  const products = productsSchema.array().parse(data);
  return products;
}

const products = await getProducts();
console.log(products);
