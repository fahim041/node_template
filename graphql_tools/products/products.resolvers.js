const productModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    productById: (parent, args) => {
      return productModel.getProductById(args.id);
    },
  },
};
