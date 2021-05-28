const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', function (req, res, next) {
    res.json({
        name: "Alfonso",
        surname : "Somma"
    });
});

module.exports = router;
