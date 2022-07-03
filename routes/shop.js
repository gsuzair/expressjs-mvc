const express = require('express');
const path = require('path');
const router = express.Router();

// Controllers
const shopController = require('../controllers/shop')
const cartController = require('../controllers/carts')
const orderController = require('../controllers/orders')
const checkoutController = require('../controllers/checkout')

router.get('/', shopController.getIndex);

router.get('/cart', cartController.getCart);

router.post('/cart', cartController.addToCart);

router.post('/cart-delete-item', cartController.postCartDeleteProduct);

router.get('/orders', orderController.getOrders);

router.get('/products', shopController.getProucts);

router.get('/products/:productId', shopController.getProduct);

router.get('/checkout', checkoutController.getCheckout);

module.exports = router;