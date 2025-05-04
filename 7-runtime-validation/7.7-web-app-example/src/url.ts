// URL parameter validation via Zod
import * as z from "zod";

const productIdSchema = z.coerce.number().positive(); // Tell Zod to coerce the productId in the URL to a numeric value

export function setupProduct(productContainer: HTMLDivElement) {
  const searchParams = new URLSearchParams(window.location.search);
  const productIdParam = searchParams.get("product-id");
  if (productIdParam) {
    // Using safeParse so we can handle success and failure cases without a try/catch.
    const result = productIdSchema.safeParse(productIdParam);

    if (result.success) {
      const productId = result.data; // number
      productContainer.innerHTML = `product-id param: ${productId}`;
    } else {
      productContainer.innerHTML = `Invalid Product ID. It must be a number. See console for details.`;
      console.error("Invalid Product ID:", result.error);
    }
  } else {
    productContainer.innerHTML = "No product-id param provided";
    productContainer.classList.add("error");
  }
}
