var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, result) {
    res.render('shop/index', { title: 'Shopping Cart', products: result });
  });
});
router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart.items : {});

  Product.findById(productId, function (err, product) {
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});
router.get('/shopping-cart', function(req,res,next){
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  // console.log(cart.generateArray());
  res.render('shop/shopping-cart', {products: cart.generateArray(),totalPrice: cart.totalPrice});
});
module.exports = router;
