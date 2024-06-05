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
  console.log('id', id);
  return products.find((product) => product.id === id);
}

module.exports = {
  getAllProducts,
  getProductById,
};
