var express = require('express');
var router = express.Router();
var Product = require('../models/products');

/* GET home page. */
router.get('/', function(req, res, next) {
   Product.find(function(err, docs){
        res.render('index', {title: 'Shopping Cart', products: docs});
  });
});

module.exports = router;
