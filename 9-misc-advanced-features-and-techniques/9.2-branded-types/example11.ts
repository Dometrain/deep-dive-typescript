// Effect - https://effect.website/docs/code-style/branded-types/
// https://effect.website/docs/code-style/branded-types/#how-branded-types-help

const BrandTypeId: unique symbol = Symbol.for("effect/Brand");

type ProductId = number & {
  readonly [BrandTypeId]: {
    readonly ProductId: "ProductId";
  };
};

const getProductById = (_id: ProductId) => {
  // Logic to retrieve product
};

type UserId = number;

const id: UserId = 1;

// This fails as expected
// getProductById(id); // Argument of type 'number' is not assignable to parameter of type 'ProductId'.
