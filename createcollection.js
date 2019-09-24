var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://it339teacher:it339teacher@ds235778.mlab.com:35778/w3testdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("w3testdb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 