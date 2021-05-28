const Products = require('../models/products');

exports.getProducts = (req, res, next) => {
    Products.find()
        .then(products => {
            res.json(products);
        })
        .catch(errors => {
            console.log(errors);
        });
    };



exports.insertProduct = (req, res, next) => {

    console.log(req.body);


};


