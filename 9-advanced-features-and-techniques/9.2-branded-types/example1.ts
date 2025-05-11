// TypeScript types are structural, not nominal.
// Risk: Passing the wrong type when structures happen to match.
type UserId = number;
type ProductId = number;

const getUserById = (id: UserId) => {
  // Retrieve user
};

const getProductById = (id: ProductId) => {
  // Retrieve product
};

const userId: UserId = 1;

getProductById(userId); // No type error, but incorrect usage
