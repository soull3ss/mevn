const Products = require('../models/products');

exports.getProducts = (req, res, next) => {
    Products.find()
        .then(products => {
            console.log(products);
        })
        .catch(errors => {
            console.log(errors);
        });
};
