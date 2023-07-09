const express = require('express');
 
require('./database');

const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.listen(4000, (req, res) => {
    console.log('RUNNING');
})