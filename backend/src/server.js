const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const AuthRoute = require('./routes/auth');
const passport  = require('passport');

require("./Strategies/local")
require('./database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended: false}
))


app.use(cookieParser());
app.use(session({
    secret: 'HSSJSWKKWSKAAUUWHDEFDGHJD',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', AuthRoute);

app.use((req, res, next) =>{
    if (req.session.user) next()
    else res.sendStatus(401);
})


app.listen(4000, (req, res) => {
    console.log('RUNNING');
})