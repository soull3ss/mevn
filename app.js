const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/routes');

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const uri = "mongodb+srv://soull3ss:Alfonso14@firstnode.joxma.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
       //console.log(result);
    })
    .catch(error => {
        console.log(error);
    })


module.exports = app;
