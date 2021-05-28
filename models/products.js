const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    title :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    author : {
        type: String,
        required : true
    },
    copySell : {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Products', productsSchema);
