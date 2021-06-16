const Products = require('../models/products');

exports.getProducts = (req, res, next) => {
    Products.find()
        .then(products => {
            res.json(products);
        })
        .then(produtcsJson => {
            console.log(produtcsJson)
        })
        .catch(errors => {
            console.log(errors);
        });
    };



exports.insertProduct = (req, res, next) => {

    const postData = req.body;

    const productToSave = new Products({
        title : postData.title,
        description : postData.description,
        price : postData.price,
        author : postData.author,
        copySell :postData.copySell,
    });

    productToSave.save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err.errors);
        });

};

exports.findProduct = (req, res, next) => {

    const keyFind = req.body;

    Products.find(keyFind)
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            res.json(error);
        });

}

exports.findAndDelete = (req, res, next) => {

    const keyFind = req.body;

    Products.findOneAndDelete(keyFind)
        .then(results => {
            res.json(results);
        })
        .catch(error => {
           res.json(error);
        });

};


