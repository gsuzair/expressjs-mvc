const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Controllers
const errorController = require('./controllers/error')

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// Template Engine
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


const server = http.createServer(app);
server.listen(3000);