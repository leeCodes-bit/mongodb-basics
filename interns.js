var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created!");
    db.close();
  });
});

// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/leeCodes";
// var mySlackUsername = 'leeCodes';
// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     console.log("Database created by " + mySlackUsername);
//     db.close();
// })