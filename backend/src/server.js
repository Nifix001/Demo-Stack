const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const AuthRoute = require('./routes/auth');


require('./database');

const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.use(cookieParser());
app.use(session({
    secret: 'HSSJSWKKWSKAAUUWHDEFDGHJD',
    resave: false,
    saveUninitialized: false
}));

// /app.use('/user', AuthRoute);

app.listen(4000, (req, res) => {
    console.log('RUNNING');
})