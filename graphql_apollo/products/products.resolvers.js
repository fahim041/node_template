const productModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    productById: (_, args) => {
      return productModel.getProductById(args.id);
    },
    productsByPrice: (_, args) => {
      return productModel.productsByPrice(args.min, args.max);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productModel.addProduct(args.description, args.price);
    },
    addReview: (_, args) => {
      return productModel.addReview(args.productId, {
        rating: args.rating,
        comment: args.comment,
      });
    },
  },
};
