// Exercise 1: Basic typeof usage
// Given the following variable, use the `typeof` operator to create `ProductNameType`.

const productName = "Laptop";
type ProductNameType = typeof productName; // string

// Exercise 2: typeof with objects
// Given the following object, do two things:
// 1. Use the `typeof` operator to create a type alias for its structure.
// 2. Create a union of the keys of the object's keys called `ProductKeys`.

const product = {
  name: "Smartphone",
  price: 799.99,
  inStock: false,
};

type ProductType = typeof product;
type ProductKeys = keyof ProductType; // "name" | "price" | "inStock"

// Exercise 3: typeof with functions
// Given the following function and use the `typeof` operator to create
// a type alias for this function's type.

function calculateDiscount(price: number, discount: number): number {
  return price - price * discount;
}

type CalculateDiscountType = typeof calculateDiscount;

// Exercise 4: typeof with arrays
// Given the following array, use the `typeof` operator to create
// a type alias called `ProductCategoriesType`.

const productCategories = ["Electronics", "Books", "Clothing"];

type ProductCategoriesType = typeof productCategories;

// Exercise 5: typeof with inferred types
// Use the `typeof` operator to infer the type of the following variable.

const discountRate = 0.15;

type DiscountRateType = typeof discountRate; // 0.15
