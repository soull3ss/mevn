const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', shopController.getProducts);

router.post('/insertLists',shopController.insertProduct);

module.exports = router;
