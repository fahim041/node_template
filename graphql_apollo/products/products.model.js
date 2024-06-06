const products = [
  {
    id: '1',
    description: 'A great product',
    price: 100.0,
    reviews: [
      {
        rating: 5,
        comment: 'I love it!',
      },
      {
        rating: 4,
        comment: 'Pretty good',
      },
    ],
  },
  {
    id: '2',
    description: 'Another great product',
    price: 200.0,
    reviews: [
      {
        rating: 5,
        comment: 'I love it!',
      },
      {
        rating: 4,
        comment: 'Pretty good',
      },
    ],
  },
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function productsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function addProduct(description, price) {
  const newProduct = {
    id: String(products.length + 1),
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addReview(productId, review) {
  const product = products.find((product) => product.id === productId);
  product.reviews.push(review);
  return review;
}

module.exports = {
  getAllProducts,
  getProductById,
  productsByPrice,
  addProduct,
  addReview,
};
