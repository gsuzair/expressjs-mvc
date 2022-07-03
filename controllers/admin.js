const Product = require('../models/products')

exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        editing: false
    });
}

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const product = new Product(null, title, imageUrl, description, price)
    product.save()
    res.redirect('/');
}

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    if(!prodId){
        return res.redirect('/');
    }
    Product.findById(prodId, product => {
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    })
}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title
    const updatedDescription = req.body.description
    const updatedImageUrl = req.body.imageUrl
    const updatedPrice = req.body.price
    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice)
    updatedProduct.save()
    res.redirect('/admin/products')
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin products', 
            path: '/admin/products'
        });
    })
}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId)
    res.redirect('/admin/products')
}