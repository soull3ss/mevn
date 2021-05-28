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


