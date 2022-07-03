const Product = require('../models/products')

exports.getProucts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Products', 
            path: '/shop/products'
        });
    })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    const product = Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title, 
            path: '/products'
        });
    })
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    })
}