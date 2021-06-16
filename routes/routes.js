const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', shopController.getProducts);

router.post('/insertProduct', shopController.insertProduct);

router.post('/findProduct', shopController.findProduct);

router.post('/deleteProducts',shopController.findAndDelete);

module.exports = router;
