exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders', 
        path: '/orders'
    });
}