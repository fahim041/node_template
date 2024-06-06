module.exports = {
  Query: {
    orders: (parent) => {
      return parent.orders();
    },
  },
};
