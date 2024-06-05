const orders = [
  {
    date: '2020-01-01',
    subtotal: 300.0,
    items: [
      {
        product: {
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
        quantity: 2,
      },
      {
        product: {
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
        quantity: 1,
      },
    ],
  },
  {
    date: '2020-01-02',
    subtotal: 400.0,
    items: [
      {
        product: {
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
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
