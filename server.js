var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection;
let client = require("./dbConnect");
var port = process.env.port || 3000;
let projectRoutes = require("./routes/projectRoutes.js");

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/api/projects', projectRoutes)



// const createCollection = (collectionName) => {
//       client.connect((err,db) => {
//        projectCollection = client.db().collection(collectionName);
//        if(!err) {
//         console.log('MongoDB Connected')
//       }
//        else {
//      console.log("DB Error: ", err);
//      process.exit(1);
//     }
// })
// }


app.listen(port,()=>{
    console.log("App listening to:http://localhost:"+port)
   // createCollection("pets");
})


