const Cart = require("../models/cart");
const Product = require("../models/products");

exports.getCart = (req, res) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for(product of products){
                const cartProductData = cart.products.find(
                    prod => prod.id === product.id
                )
                if(cartProductData){
                    cartProducts.push({ productData: product, qty: cartProductData.qty })
                }   
            }
            res.render('shop/cart', {
                pageTitle: 'Your Cart', 
                path: '/cart',
                products: cartProducts
            });
        })
    })
}

exports.addToCart = (req, res) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price)
    })
}

exports.postCartDeleteProduct = (req, res) => {
    const prodId = req.body.productId;

    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price)
        return res.redirect('/cart');
    })
}