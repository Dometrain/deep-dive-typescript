// Validating API response with Zod
import * as z from "zod";
import { env } from "./environment.js";

const productsSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

type Product = z.infer<typeof productsSchema>;

async function getProducts(): Promise<Product[]> {
  const resp = await fetch(env.VITE_API_BASE_URL + "/products");
  const data = await resp.json();
  const products = productsSchema.array().parse(data);
  return products;
}

export async function setupProducts(productsContainer: HTMLDivElement) {
  try {
    const products = await getProducts();
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <p>${product.name} - $${product.price}</p>
        `;
      productsContainer.appendChild(productDiv);
    });
  } catch (error) {
    productsContainer.innerHTML = `
      <p class="error">Error fetching products.</p>
    `;
    console.error("Error fetching products:", error);
  }
}
