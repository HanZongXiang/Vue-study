const mongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/info";

mongoClient.connect(url,(err,db) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success to connect');
  }
  db.close()
})