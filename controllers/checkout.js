exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout', 
        path: '/checkout'
    });
}