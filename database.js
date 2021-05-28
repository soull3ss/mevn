const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://soull3ss:Alfonso14@firstnode.joxma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, function (err, db) {
    }).then(success =>{ console.log(success); }).catch(error =>{console.log(error);})


module.exports = MongoClient;
