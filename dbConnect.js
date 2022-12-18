require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

// database connection
const uri = 'mongodb+srv://sit725-2022-t2-prac4:chep@cluster0.alzn8sh.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri,{useNewUrlParser: true })

client.connect((err,db) => {
    if(!err) {
     console.log('MongoDB Connected')
    }
    else {
     console.log("DB Error: ", err);
     process.exit(1);
   }
})

module.MongoClient = client;
