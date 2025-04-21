// URL parameter validation via Zod
import * as z from "zod";

const productIdSchema = z.coerce.number().positive(); // Tell Zod to coerce the productId in the URL to a numeric value

const searchParams = new URLSearchParams(window.location.search);
const productIdParam = searchParams.get("productId");
if (productIdParam) {
  const result = productIdSchema.safeParse(productIdParam);
  if (result.success) {
    const productId = result.data; // This will be a number
    console.log("Valid URL parameter:", productId);
  } else {
    console.error("Invalid URL parameter:", result.error);
  }
}
